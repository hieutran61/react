import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
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

    renderComments = (comments) => {
        return comments.map((cmt) => {
            return (
                <ul className='list-unstyled'>
                    <li>{cmt.comment}</li>
                    <li>-- {cmt.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}</li>
                </ul>
                
            );
        });
    }
    
    render() {
        if ((this.props.dish != null) && (this.props.dish.comments != null))
        {       
            return (
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        }
        else if ((this.props.dish != null) && (this.props.dish.comments == null))
        {
            return(
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div></div>
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }

}

export default DishDetail;