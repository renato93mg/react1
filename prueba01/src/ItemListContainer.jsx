import ListGroup from 'react-bootstrap/ListGroup';

export default function ItemListContainer(props) {
  return (
    <ListGroup>
      <ListGroup.Item variant="secondary">{props.greeting}</ListGroup.Item>
    </ListGroup>
  );
}

