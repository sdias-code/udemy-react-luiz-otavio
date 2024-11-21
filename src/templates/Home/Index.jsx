import "./styles.css";

import { Component } from "react";
import { loadPosts } from "../../utils/load-posts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],  
    page: 0,
    postsPerPage: 10
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
    console.log(`pagina: ${page}, próxima pagina: ${nextPage}, post por pagina: ${postsPerPage}`);
   
  }

  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    const { posts, page, postsPerPage, allPosts } = this.state;
    const noMorePost = page + postsPerPage >= allPosts.length;
    return (
      <section className="container">
        <Posts posts={posts}/>
        <Button 
        className="button-container"
        text={'Load More Posts'}
        onClick={this.loadMorePosts}
        disabled={noMorePost}
        />
        
      </section>
    );
  }
}

export default Home;

