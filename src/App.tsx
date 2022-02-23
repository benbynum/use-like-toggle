import './App.css';
import CommentCard from './components/CommentCard';

const comments = [
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    id: '1'
  },
  {
    text: 'The satisfaction of helping another human being is all the thanks I et cetera',
    id: '2'
  },
  {
    text: 'The human torch was denied a bank loan.',
    id: '3'
  }
];

function App() {
  return (
    <div className="App">
      {comments.map((item) => (
        <CommentCard text={item.text} id={item.id} key={item.id} />
      ))}
    </div>
  );
}

export default App;
