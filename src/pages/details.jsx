import { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCoinDetails } from '../services/api';
import Image from '../components/image/image';
import Table from '../components/table/table';
import Wait from '../components/wait/wait';
import Lemon from '../components/animation/lemon';
import { Ctx } from '../context/context';

const DetailsPage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false)
  const { id } = useParams();
  const context = useContext(Ctx);

  const tableHeaderData = [
    {
      objKey: "symbol",
      label: "Symbol",
      type: "string",
    },
    {
      objKey: "hashing_algorithm",
      label: "Hashing algorithm",
      type: "string",
    },
    {
      objKey: "market_data.market_cap.eur",
      label: "Market cap in Euro",
      type: "object",
    },
    {
      objKey: "genesis_date",
      label: "Genesis Date",
      type: "string",
    }
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const res = await getCoinDetails(id);
        setData(res);
        setLoading(false)
      } 
      catch (error) {
        console.log(error);
        setLoading(false)
      }
    };
    getData();
  }, [id]);

  return(
  <div className="mt-4">
    <Link to="/" className={`custom-link-button ${context.globalState.theme}`}>Back Home</Link>
    <div className="d-flex m-3 align-items-center details-title ">
        {data?.image?.small && <><Image src={data.image.small} alt={data.name} /><span className="ms-1"><h3 className={`m-0 ${context.globalState.theme}`}>{data.name}</h3></span></>}
    </div> 
    <div className="details-description m-3" dangerouslySetInnerHTML={{__html: data?.description?.en || ""}}></div>
    {/* <iframe srcDoc={data?.description?.en || ""}/> */}
    <div className="m-3">
        {data && <Table header={tableHeaderData} body={[data]}/>}
    </div>
    <ul className="p-0 m-3" style={{listStyle: "none"}}>
      {data?.links?.homepage?.map((homepage, index) => (
        <li key={homepage + index}><a href={homepage} target="blank">{homepage}</a></li>
      ))}
    </ul>
    <Lemon />
    {loading && <Wait fixed/>}
  </div>
  )
};

export default DetailsPage;
