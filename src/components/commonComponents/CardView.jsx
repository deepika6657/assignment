import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardView({ data}) {
    console.log("card-view",data);
    
  return (
    <Card style={{ width: '18rem' }} className='mx-2 my-3'>
      <Card.Img variant="top" src={data.url}  alt='image'/>
      <Card.Body> 
        <Card.Title>{ data?.title || "Title"  } </Card.Title>
        <Card.Text>
         {data?.body || "body"}
        </Card.Text>
        <Button variant="primary" onClick={()=>{alert("Button clicked")}}>Clicked</Button>
      </Card.Body>
    </Card>
  );
}

export default CardView;