
import Card from "../Card/Card";
import Container from "../Container"


const CardContainer = ({data}) => {

    return (
       <div>
        <Container>
<div className="flex justify-between">
      <div>
        <h1>Customer Tickets</h1>
        
        
      </div>
    
     </div>
       </Container>
       <Container>
        <div className="grid grid-cols-2 gap-4">
         {
            data.map(elm=>{
                return <Card elm={elm} ></Card>
            })
        }
       </div>
       </Container>
       <div>
      <h1>Task Status</h1>
    </div>
        
       </div>
       
        )
    
          
    
    ;
};

export default CardContainer;