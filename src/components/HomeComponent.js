import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle,Badge} from 'reactstrap';
import { Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl'
import {FadeTransform} from 'react-animation-components';

function RenderCard({item,isLoading,errMess}) {
    if(isLoading)
    {
        return (
            <Loading/>
        )
    }
    else if (errMess){
        return (
            <h4>{errMess}</h4>
        )
    }
    else
        return(
            <FadeTransform in 
            transformProps={{
                exitTransform:'scale(0.5) translateY(-50%)'
            }}>
            <Card>
                <CardImg src={baseUrl+item.image} alt={item.name}  />
                <CardBody>
                <CardTitle><h3>{item.name}</h3></CardTitle>
                <CardSubtitle>{item.label ? <Badge className='m-1 px-3 py-0' color='danger'><h5>{item.label}</h5></Badge> : null }
                {item.price ? <Badge className='m-1 py-0 px-3' pill><h6>&#36;{item.price}</h6></Badge> : null }</CardSubtitle>
                {item.designation ? <CardSubtitle><h5>{item.designation}</h5></CardSubtitle> : null }
                <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
    );

}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-strech">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading={props.promosLoading} errMess={props.promosErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;