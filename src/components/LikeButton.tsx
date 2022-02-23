import React from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useLikeToggle from '../hooks/useLikeToggle';

interface Props {
  id: string;
}

const LikeButton: React.FC<Props> = ({ id }) => {
  const { likeState, like, unlike } = useLikeToggle(id);
  const { liked, loading } = likeState;

  const handleClick = () => {
    if (!liked) {
      like();
    } else {
      unlike();
    }
  };

  return (
    <IconButton
      style={{ marginLeft: 'auto' }}
      onClick={handleClick}
      disabled={loading}
    >
      {!liked ? (
        <FavoriteBorderIcon />
      ) : (
        <FavoriteIcon style={{ color: 'red' }} />
      )}
    </IconButton>
  );
};

export default LikeButton;
