import { useState, useEffect, useContext } from "react";
import { getMarkets } from "../services/api";
import Table from "../components/table/table";
import CustomPagination from "../components/pagination/pagination";
import Wait from "../components/wait/wait";
import { perPageNo } from "../services/utils";
import { useNavigate } from "react-router-dom";
import { Ctx } from "../context/context";

const HomePage = () => {

  const [coinData, setCoinData] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const context = useContext(Ctx);

  console.log(context);
  
  const tableHeaderData = [
    {
      objKey: "image",
      label: "Image",
      type: "img",
    },
    {
      objKey: "name",
      label: "Name",
      type: "string",
    },
    {
      objKey: "symbol",
      label: "Symbol",
      type: "string",
    },
    {
      objKey: "current_price",
      label: "Current Price",
      type: "string",
    },
    {
      objKey: "high_24h",
      label: "High 24 hour Price",
      type: "string",
    },
    {
      objKey: "low_24h",
      label: "Low 24 hour Price",
      type: "string",
    },
  ];

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await getMarkets(context.globalState.pageNo, perPageNo);
      setCoinData(res);
      setLoading(false);
    };
    getData();
  }, [context.globalState.pageNo]);

  const handleNextPage = () => {
    context.setGlobalState((state) => {
      const temp = {...state, pageNo: state.pageNo + 1}
      return temp
    });
  };

  const handlePrevPage = () => {
    
    context.setGlobalState((state) => {
      if (state.pageNo > 1) {
        const temp = {...state, pageNo: state.pageNo - 1}
        return temp
      }
      return state;
    });
  };

  const tableRowOnClick = (selectedObj) => {
    navigate(`/details/${selectedObj.id}`)
  }

  return (
    <div className="m-5">
      {coinData && (
        <Table
          header={tableHeaderData}
          body={coinData}
          handleRowClick={tableRowOnClick}
          className="home-table"
        />
      )}
      <div className="d-flex justify-content-center">
        <CustomPagination
          handleNext={handleNextPage}
          handlePrev={handlePrevPage}
          currentPageNo={context.globalState.pageNo}
        />
      </div>
     {loading && <Wait fixed/>}
    </div>
  );
};

export default HomePage;
