import { useReducer, useEffect } from 'react';
import { api } from '../utils/mockApi';

interface Action<T, P> {
  type: T;
  payload?: P;
}

interface LikeState {
  liked: boolean;
  loading: boolean;
  error: string;
}

const actions = {
  LOADING: 'LOADING',
  LIKE: 'LIKE',
  UNLIKE: 'UNLIKE',
  ERROR: 'ERROR',
  SET: 'SET'
};

const initialState: LikeState = {
  liked: false,
  loading: true,
  error: ''
};

const reducer = (state: LikeState, action: Action<string, any>) => {
  switch (action.type) {
    case actions.LIKE:
      return {
        ...state,
        loading: false,
        liked: true,
        error: ''
      };
    case actions.UNLIKE:
      return {
        ...state,
        loading: false,
        liked: false,
        error: ''
      };
    case actions.LOADING:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case actions.ERROR:
      return {
        ...state,
        loading: false,
        error: 'There was an error'
      };
    case actions.SET:
      return {
        ...state,
        liked: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

const useLikeToggle = (id: string) => {
  const [likeState, dispatch] = useReducer(reducer, initialState);

  // get status of like on inital load
  useEffect(() => {
    api
      .getStatus(id)
      .then((res) => dispatch({ type: actions.SET, payload: res }));
  }, [id]);

  const like = () => {
    dispatch({ type: actions.LOADING });
    api
      .like(id)
      .then(() => dispatch({ type: actions.LIKE }))
      .catch(() => dispatch({ type: actions.ERROR }));
  };

  const unlike = () => {
    dispatch({ type: actions.LOADING });
    api
      .unlike(id)
      .then(() => dispatch({ type: actions.UNLIKE }))
      .catch(() => dispatch({ type: actions.ERROR }));
  };

  return { likeState, like, unlike };
};

export default useLikeToggle;
