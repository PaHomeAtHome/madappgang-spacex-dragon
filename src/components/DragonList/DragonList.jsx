import { DragonListComponent } from '../DragonListComponent/DragonListComponent';
import { DragonListStyled } from './DragonListStyled';
import { useGetDragonsQuery } from 'redux/API/api';
import { Spinner } from 'react-bootstrap';

export const DragonList = () => {
  const { data, error, isLoading } = useGetDragonsQuery();
  console.log(data);
  return (
    <DragonListStyled>
      {isLoading && <Spinner animation="border" variant="primary" />}
      {error && <p>{error.message}</p>}
      {data &&
        [...data].map(dragon => (
          <DragonListComponent key={dragon.id} dragon={dragon} />
        ))}
    </DragonListStyled>
  );
};