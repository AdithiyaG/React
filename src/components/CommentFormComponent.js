import React,{Component}  from 'react';
import {Button,Modal,ModalHeader, ModalBody,Row,Col,Label} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
class CommentForm extends Component {

    constructor(props) {
        super(props);
        
        this.state={
          isModelOpen:false
        }
  
        
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
       // event.preventDefault();
    }
  
    render()
    { return(
      <React.Fragment>
        <Button outline onClick={this.toggleModal}><span className="fa fa-pencil"></span>Sumbit Comment</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Sumbit Comment</ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row class='form-group'>
                <Label htmlFor="rating" md={12}>Rating</Label>
                <Col md={12}>
                                    <Control.select model=".rating" name="rating" id="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                </Row>
                <Row className="form-group">
                                <Label htmlFor="firstname" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comments</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button type="submit" color="primary">
                                    Sumbit
                                    </Button>
                                </Col>
                            </Row>


              </LocalForm>
            </ModalBody>
  
        </Modal>
      </React.Fragment>
      );
  
    
        
    }
  
  
  }

  export default CommentForm


