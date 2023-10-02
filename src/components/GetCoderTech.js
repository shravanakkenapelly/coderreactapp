// // import { Label } from "reactstrap";
// import { useState } from "react";
// // import { getCoderByName } from "../services/CoderService";
// import { getCoderByTech } from "../services/CoderService";
// const GetCoderByTech1=()=>{
//     const [coder,setCoder] = useState({})
//     const [tech,setTech] = useState('')
//    /*  const navigate = useNavigate() */
//    const handlesubmit=(e)=>{
//    e.preventDefault();
//         getCoderByTech(tech).then((response) => {
//             setCoder(response.data)
//             console.log(response.data);
//         }).catch(error =>{
//             console.log(error);
//         })
//     }
//     return(
//        <>
//        <label>CoderTech</label>
//        <form onSubmit={handlesubmit}>
//        <input type="text" name="tech" className="form-control" value={tech} onChange={(e)=>setTech(e.target.value)}/>
//        <button type="submit" className="btn btn-success mb-4">Submit</button>
//        </form>
// {/* <p>{coder.cid}</p><br></br>
// <p>{coder.cname}</p><br></br>
// <p>{coder.tech}</p><br></br> */}
//   {coder.cid && <p>Coder ID: {coder.cid}</p>}
//       {coder.cname && <p>Coder Name: {coder.cname}</p>}
//       {coder.tech && <p>Technologies: {coder.tech}</p>}
//        </>
//     );
// };
// export default GetCoderByTech1;
import React, { useState } from "react";
import { getCoderByTech } from "../services/CoderService";

const GetCoderByTech1 = () => {
  const [coder, setCoder] = useState([]);
  const [tech, setTech] = useState('');

  const handlesubmit=(e)=>{
    e.preventDefault();
    getCoderByTech((tech))
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
      <label>Search Coder by Tech</label>
      <form onSubmit={handlesubmit}>
      <input
        type="text"
        name="tech"
        className="form-control"
        value={tech}
        onChange={(e) => setTech(e.target.value)}
      /><br></br>
      
      <button type="submit" className="btn btn-success mb-4">Submit</button>
      </form>
      
      <table className="table table-bordered table-striped">
                {/* <thead className="table-dark"> */}
                <thead>   
                    <tr>
                        <th> Coder Id </th>
                        <th> Coder Name </th>
                        <th>  Technology </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        coder.map(
                            coders =>
                            <tr key = {coders.cid}> 
                                <td> {coders.cid} </td>
                                <td> {coders.cname} </td>
                                <td>{coders.tech}</td>
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>
            

      
    </>
  );
};
export default GetCoderByTech1 
     

