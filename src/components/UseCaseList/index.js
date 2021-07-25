import { memo } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const UseCaseList = ({ useCases, onClick }) => {
  const listItems = useCases.map(usecase => (
    <ListGroupItem key={usecase.id} style={{ height: '4rem' }} onClick={() => onClick(usecase.id)}>
      {usecase.id} - {usecase.name}
    </ListGroupItem>
  ));

  return <ListGroup>{listItems}</ListGroup>;
};

export default memo(UseCaseList);
