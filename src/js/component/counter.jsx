import React, {useState, useEffect}  from "react"






const SecondsCounter =() =>{
    const [seconds,setSeconds] = useState(0)
    useEffect(() =>{
        const interval = setInterval(()=>{
            setSeconds(seconds => seconds+1);
        }, 1000);
    

    },[]);
   
   
        return (
            <>
        <div className="card text-center" style={{width: "18rem", height: "500px"}}>
          <div className="card-body bg-dark">
            <h5 className="card-title text-white mt-5 pt-5">Simple Timer</h5>
                <p className="card-text text-white align-middle mt-4"><h1>{seconds}</h1></p>
                    <p className ="card-text d-flex justify-content-around">
                        <button className="btn btn-danger text-white">Stop</button>
                        <button className="btn btn-primary text-white">Reset</button>
                        <button className="btn btn-success text-white">Resume</button>
                    </p>
                
          </div>
        </div>
        
        </>);
}

    
    export default SecondsCounter;