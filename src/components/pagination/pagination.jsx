import { Pagination } from "react-bootstrap";

const CustomPagination = ({handleNext, handlePrev, currentPageNo}) => {
  return (
    <Pagination>
      <Pagination.Prev onClick={handlePrev}/>
      <Pagination.Item>{currentPageNo}</Pagination.Item>
      <Pagination.Next onClick={handleNext}/>
    </Pagination>
  );
};

export default CustomPagination;
