import React from "react";
import switterLogo from "../csc667-logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Container, Button, Navbar, Form } from "react-bootstrap";
import { connect } from 'react-redux';
import { BrowserRouter as Link, Redirect } from "react-router-dom";
import { setLikedTweet, setMessage } from '../redux/actions/userActions'; 

const Header = ({ dispatch, likedTweet, message, isLoggedIn }) => {

  const getBlogPost = () => {
    axios
      .get("/api")
      .then(res => {
        const data = res.data;
        console.log("Data has been received!!", data);
      })
      .catch(() => {
        alert("Error finding data");
      });
  }

  React.useEffect(() => {
    getBlogPost();
  }, []);

  return (
    <Container>
      <Navbar bg="white">
        <Navbar.Brand href="/" style={logoStyle.float}>
          <img src={switterLogo} width="40" height="40" alt="logo" />
        </Navbar.Brand>
      </Navbar>
      <form>
        <Form.Group controlId="tweet_submit">
          <Form.Control
            type="text"
            placeholder="What's on your mind"
            // name="message"
          />
        </Form.Group>
        <Button 
          style={{marginInlineStart:"600px"}} 
          onClick={() =>  window.location.href='/welcome'}
        >
          Swit
        </Button>
      </form>
      <button onClick={getBlogPost}>Get All Tweet</button>
    </Container>
  );
}

const mapStateToProps = state => ({
  likedTweet: state.userReducer.likedTweet,
  message: state.userReducer.message,
});

export default connect(mapStateToProps, null)(Header);

// CSS:
const logoStyle = {
  position: {
    float: "left !important",
    marginTop: "-15px !important"
  }
};

// export default class Header extends React.Component {
//   state = {
//     id: 1,
//     // username: "user1",
//     message: "",
//     likes: 1,
//     tweets: [],
//   };

//   componentDidMount = () => {
//     this.getBlogPost();
//   };

//   getBlogPost = () => {
//     axios
//       .get("/api")
//       .then(res => {
//         const data = res.data;
//         this.setState({ tweets: data });
//         console.log("Data has been received!!");
//       })
//       .catch(() => {
//         alert("Error finding data");
//       });
//   };

//   handleChange = ({ target }) => {
//     const { name, value } = target;

//     this.setState({ [name]: value });
//   };

//   submit = e => {
//     e.preventDefault();

//     const payload = {
//       id: 1,
//       username: "user1",
//       message: this.state.message,
//       likes: 1
//     };

//     axios({
//       url: "/api/save",
//       method: "POST",
//       data: payload
//     })
//       .then(() => {
//         console.log("Data has been sent to the server");
//         this.resetUserInputs();
//         this.getBlogPost();
//       })
//       .catch(() => {
//         console.log("Internal server error");
//       });
//   };

//   resetUserInputs = () => {
//     this.setState({
//       message: ""
//     });
//   };

//   displayBlogPost = tweets => {
//     if (!tweets.length) return null;

//     return tweets.map((tweet, index) => (
//       <div key={index}>
//         <h3>{tweet.username}</h3>
//         <p>{tweet.message}</p>
//         <h6>{tweet.likes}</h6>
//       </div>
//     ));
//   };

//   render() {
//     console.log("State: ", this.state);
//     return (
//       <Container>
//         <Navbar bg="white">
//           <Navbar.Brand href="/" style={logoStyle.float}>
//             <img src={switterLogo} width="40" height="40" alt="logo" />
//           </Navbar.Brand>

//         </Navbar>
//         <form onSubmit={this.submit}>
//           <Form.Group controlId="tweet_submit">
//             <Form.Control
//               type="text"
//               placeholder="What's on your mind"
//               name="message"
//               value={this.state.message}
//               onChange={this.handleChange}
//             />
//           </Form.Group>
//           <Button 
//             style={{marginInlineStart:"600px"}} 
//             type="submit"
//           >
//             Swit
//           </Button>
//         </form>
//         <div classname="blog-">{this.displayBlogPost(this.state.tweets)}</div>
//       </Container>
//     );
//   }
// }


