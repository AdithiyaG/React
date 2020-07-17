import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle,Badge} from 'reactstrap';

function RenderCard({item}) {

    return(
        <Card>
            <CardImg src={item.image} alt={item.name}  />
            <CardBody>
            <CardTitle><h4>{item.name}</h4></CardTitle>
            <CardSubtitle>{item.label ? <Badge className='m-1 px-3 py-0' color='danger'><h5>{item.label}</h5></Badge> : null }{item.price ? <Badge className='m-1 py-0 px-3' pill><h6>&#36;{item.price}</h6></Badge> : null }</CardSubtitle>
            {item.designation ? <CardSubtitle><h5>{item.designation}</h5></CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-strech">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;