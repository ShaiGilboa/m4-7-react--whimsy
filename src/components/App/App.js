import React from 'react';
import styled from 'styled-components';
import 'focus-visible';

import avatar from '../../assets/carmen-sandiego.png';

import Tweet from '../Tweet';
const initialState = {
  "numOfLikes": 100,
  "numOfRetweets": 100,
  "isLiked": false,
  "isRetweeted": false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'like':
      return ({
        ...state,
        numOfLikes: state.numOfLikes+1,
        isLiked: true,
      });
    case 'dislike':
    return ({
      ...state,
      numOfLikes: state.numOfLikes-1,
      isLiked: false,
    });
    case 'retweet':
    return ({
      ...state,
      numOfRetweets: state.numOfRetweets+1,
      isRetweeted: true,
    });
    case 'unretweet':
    return ({
      ...state,
      numOfRetweets: state.numOfRetweets-1,
      isRetweeted: false,
    });
    default:
      break;
  }
}
const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const toggleLike = () => {
    state.isLiked ? dispatch({type: 'dislike'}) : dispatch({type: 'like'});
  };
  const toggleRetweet =() => {
    state.isRetweeted ? dispatch({type: 'unretweet'}) : dispatch({type: 'retweet'});
  };
  return (
    <Wrapper>
      <Tweet
        tweetContents="Where in the world am I?"
        displayName="Carmen Sandiego ✨"
        username="carmen-sandiego"
        avatarSrc={avatar}
        timestamp={new Date()}
        numOfRetweets={state.numOfRetweets}
        numOfLikes={state.numOfLikes}
        isLikedByCurrentUser={state.isLiked}
        isRetweetedByCurrentUser={state.isRetweeted}
        handleToggleLike={toggleLike}
        handleToggleRetweet={toggleRetweet}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;
export default App;
