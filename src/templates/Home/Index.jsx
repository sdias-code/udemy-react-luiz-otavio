import "./styles.css";

import { Component } from "react";
import { loadPosts } from "../../utils/load-posts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import TextInput from "../../components/TextInput";


class Home extends Component {
  state = {
    posts: [],
    allPosts: [],  
    page: 0,
    postsPerPage: 10,
    searchValue: '',
  };

  async componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const {page, postsPerPage} = this.state;
    const postsAndPhotos = await loadPosts();

    this.setState({ 
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos, 
    });
   
  };

  loadMorePosts = () => {
    const {
      page,
      postsPerPage, 
      allPosts,
      posts
    } = this.state;
    
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({posts, page: nextPage})      
  }

  handleChange = (e) => {
    const {value} = e.target;    
    this.setState({searchValue: value});
  }

  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePost = page + postsPerPage >= allPosts.length;
    const filteredPosts = searchValue ? 
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    }) : posts;
    return (
      <section className="container">
        {searchValue && (
          <>
          <h1>Search value: {searchValue}</h1><br/><br/>
          </>
        )}
      <TextInput 
        searchValue={searchValue} 
        handleChange={this.handleChange} />

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts}/>
        )}

        {filteredPosts.length === 0 && (
          <p>Não existem posts</p>
        )}
        
        {!searchValue && (
          <Button 
          className="button-container"
          text={'Load More Posts'}
          onClick={this.loadMorePosts}
          disabled={noMorePost}
          />
        )}
        
        
        
      </section>
    );
  }
}

export default Home;

