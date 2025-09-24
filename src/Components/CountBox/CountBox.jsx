import React from 'react';
import vector1 from "../../assets/vector1.png"
import vector2 from "../../assets/vector2.png"
import Container from "../../Components/Container";

const CountBox = () => {
    return (
       <Container>
         <div className="md:flex my-3 gap-3 ">
            <div className="relative bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex items-center justify-between rounded-lg">
  <img src={vector1} alt="" className="z-10" />
  <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-white">
    <p className="text-sm whitespace-nowrap">In-Progress</p>
    <h1 className="text-3xl font-bold">0</h1>
  </div>
  <img src={vector2} alt="" className="z-10" />
</div>

            
         <div className="relative bg-gradient-to-r from-[#54CF68] to-[#00827A] flex items-center justify-between rounded-lg" >
                <img src={vector1} alt="" />
                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-white">
                    <h2>Resolved</h2>
                <h1 className="text-3xl font-bold">0</h1>
                
                </div>
                <img src={vector2} alt="" />

            </div>
            
        </div>
       </Container>
    );
};

export default CountBox;