import React ,{ Component } from 'react';
import { Card, CardImg,CardText,CardBody,CardTitle } from 'reactstrap';

 class DishDetail extends Component {
  constructor(props){
      super(props);
  };
  renderComments(comments)
  {
    if (comments != null) {
        let options = { year: "numeric", month: "short", day: "numeric" };
        return comments.map(comment => (
          <ul key={comment.id} className="list-unstyled">
            <li className="mb-2">{comment.comment}</li>
            <li>
              -- {comment.author},{" "}
              {new Date(comment.date).toLocaleDateString("en-US", options)}
            </li>
          </ul>
        ));
      } else return <div />;

  };

  render() 
  {  const dish = this.props.dish
    
    
    if(dish!=null){
        return(
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                <CardTitle><h2>{dish.name}</h2></CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
                </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {this.renderComments(dish.comments)}
              </div>
            </div>
            
        );

    }
    else{
        return (<div></div>);
    }
  }


}
export default DishDetail;