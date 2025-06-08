import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';



function Selectpage(){
let [object, setobject]=useState([])

    async function fetchdata(){
        var output = await fetch("http://localhost:5000/mod/select")
        var data= await output.json()
        setobject(data)
    }
    useEffect(()=>{
        fetchdata()
    })

    return <>
 <div className="table-responsive">          
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Choice of meal</th>
        <th>Prime Focus</th>
        <th>When Starting out?</th>
        <th>Snap of your Diet</th>
        <th>Update your Entries</th>
        <th>Remove meals</th>
      </tr>
    </thead>
    <tbody>
     {object.map((x)=>
       <tr>
        <td>{x.pname}</td>
        <td>{x.phone}</td>
        <td>{x.meal}</td>
        <td>{x.focus}</td>
        <td>{x.time}</td>
        <td>{x.image}</td>
        <td> <Link to={'/update/'+x._id}><button className="btn btn-primary"> Update</button> </Link></td>
        <td><button className="btn btn-danger" onClick={ async()=>{
          if(window.confirm("are you sure?")){
            var del_id = x._id;
            var fd = new FormData();
            fd.append("del_id",del_id);

            var fetchapi = await fetch("http://localhost:5000/mod/del",
              {
                method:"post",
                body:fd
              }

            
            );
          var showresult= await fetchapi.json();
            fetchdata();
            console.log(showresult)
          }
        }} >Delete</button> </td>
      </tr>
    )}
   
    </tbody>
  </table>
  </div>

    </>



}

export default Selectpage