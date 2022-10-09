import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    const RenderComments = ({comments}) => {
        return comments.map((cmt) => {
            return (
                <ul className='list-unstyled'>
                    <li>{cmt.comment}</li>
                    <li>-- {cmt.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}</li>
                </ul>
                
            );
        });
    }
    
    const DishDetail = (props) => {
        if ((props.dish != null) && (props.dish.comments != null))
        {       
            return (
                <div className="container"> 
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish}/>
                        </div>
                        <div  className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <RenderComments comments={props.dish.comments}/>
                        </div>
                    </div>
                </div>
            );
        }
        else if ((props.dish != null) && (props.dish.comments == null))
        {
            return(
                <div className="container"> 
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish}/>
                        </div>
                        <div></div>
                    </div>
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }


export default DishDetail;