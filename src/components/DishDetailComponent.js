import React,{Component}  from 'react';
import { Card, CardImg, CardBody, CardText,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import CommentForm from './CommentFormComponent'
import {Loading} from './LoadingComponent'
import {baseUrl} from '../shared/baseUrl'
import {FadeTransform,Fade,Stagger} from 'react-animation-components'


function RenderDish({dish})
{ return(
  <FadeTransform in 
  transformProps={{
      exitTransform:'scale(0.5) translateY(-50%)'
  }}>
  <Card>
  <CardImg width="100%" src={baseUrl+dish.image} alt={dish.name}></CardImg>
  <CardBody>
     <CardTitle><h2>{dish.name}</h2></CardTitle>
      <CardText>{dish.description}</CardText>
  </CardBody>
</Card>
</FadeTransform>
)
 
                
}
   function RenderComments({comments})
  {
    if (comments != null) {
        let options = { year: "numeric", month: "short", day: "numeric" };
        return comments.map(comment => (
          <ul key={comment.id} className="list-unstyled">
            <Stagger in>
              <Fade in>
            <li className="mb-2">{comment.comment}</li>
            <li>
              -- {comment.author},{" "}
              {new Date(comment.date).toLocaleDateString("en-US", options)}
            </li>
            </Fade>
            </Stagger>
          </ul>
        ));
      } else return <div />;

  };


  class DishDetail extends Component{
  
    render(){
      if(this.props.isLoading){
        return(
          <div className='container'>
            <div className="row">
              <Loading/>
            </div>
          </div>
        )
      }
      else if(this.props.errMess){
        return(
          <div className='container'>
            <div className="row">
              <h4>{this.props.errMess}</h4>            
              </div>
          </div>
        )
      }
    else if(this.props.dish!=null){
      return(
        <div className="container">
          <div className='row'>
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                  <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className='row'>
              <div className='col-12 col-md-5 m-1'>
                <RenderDish dish={this.props.dish}/>
              </div>
              <div className="col-12 col-md-5 m-1">
              <h4>Comments</h4>
              <RenderComments comments={this.props.comments}/>
              <CommentForm postComment={this.props.postComment}
              dishId={this.props.dish.id}/>
              
            </div>
          </div>
          </div>
          
      );
      
  }
  else{
      return (<div></div>);
  }
    
  }}
  

 
export default DishDetail;