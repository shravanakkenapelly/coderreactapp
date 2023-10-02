// import { Label } from "reactstrap";
// import { useEffect,useState } from "react";
// import { getCoderByName } from "../services/CoderService";
// const GetCoderByName1=()=>{
//     const [coder,setCoder] = useState([])
//     const [cname,setCname] = useState('')
//    /*  const navigate = useNavigate() */
//     useEffect(() => {
//         getcodername(cname);
//     }, [cname])
//     const getcodername =(cname) => {
//          getCoderByName(cname).then((response) => {
//             setCoder(response.data)
//             console.log(response.data);
//         }).catch(error =>{
//             console.log(error);
//         })
//     }
//     useEffect(()=>{
//         getcodername();
//     },[cname]);
//     return(
//        <>
//        <label>CoderName</label>
//        <input type="text" name="cname" className="form-control" value={cname} onChange={(e)=>setCname(e.target.value)}></input>
// <p>{coder.cid}</p><br></br>
// <p>{coder.cname}</p><br></br>
// <p>{coder.tech}</p><br></br>
//  {/* {coder.cid && <p>Coder ID: {coder.cid}</p>}
//       {coder.cname && <p>Coder Name: {coder.cname}</p>}
//       {coder.tech && <p>Technologies: {coder.tech}</p>} */}
//        </>
//     );
// };
// export default GetCoderByName1;
import React, { useState } from "react";
import { getCoderByName } from "../services/CoderService";

const GetCoderByName1 = () => {
  const [coder, setCoder] = useState({});
  const [cname, setCname] = useState('');

  const handlesubmit=(e)=>{
    e.preventDefault();
      getCoderByName(cname)
        .then((response) => {
          setCoder(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } 

  return (
    <>
      <label>Search Coder by Name</label>
      <form onSubmit={handlesubmit}>
      <input
        type="text"
        name="cname"
        className="form-control"
        value={cname}
        onChange={(e) => setCname(e.target.value)}
      /><br></br>
      <button type="submit" className="btn btn-success mb-4">Submit</button>
      </form>
      
      {coder.cid && <p>Coder ID: {coder.cid}</p>}
      {coder.cname && <p>Coder Name: {coder.cname}</p>}
      {coder.tech && <p>Technologies: {coder.tech}</p>}
    </>
  );
};
export default GetCoderByName1;
