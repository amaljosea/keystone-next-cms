import { Component } from 'react';
import axios from 'axios'
import Header from '../components/Header'
import { Container } from 'react-bootstrap'

class App extends Component {

  static async getInitialProps() {
    let response = await axios.get('http://localhost:3000/api/posts');
    return { posts: response.data };
  }

  render() {
    return (
      <>
        <Header />
        <Container>
          <div className='content'>
            {this.props.posts.map((post, i) => {
              return (
                <div className='post' key={i}>
                  <div className='row'>
                    <div className='col-12 col-md-4'>
                      <img className='img-fluid' src={post.image.secure_url} />
                    </div>
                    <div className='col-12 col-md-8'>
                      <h2>{post.title}</h2>
                      <div dangerouslySetInnerHTML={{ __html: post.content.brief }}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </>
    );
  };
}

export default App;