import React from 'react';
import { Card } from '@mui/material';
import LikeButton from './LikeButton';

interface Props {
  text: string;
  id: string;
}

const CommentCard: React.FC<Props> = ({ text, id }) => {
  return (
    <Card style={{ maxWidth: '30rem', margin: '1rem auto', padding: '1rem' }}>
      <p>{text}</p>
      <div style={{ display: 'flex' }}>
        <LikeButton id={id} />
      </div>
    </Card>
  );
};

export default CommentCard;
