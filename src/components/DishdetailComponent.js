import React, {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderDish({dish}) {
    if (dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    <RenderComments comments={dish.comments}/>
                </CardBody>
            </Card>
        );
    } else {
        return (
            <div/>
        )
    }
}

const RenderComments = ({comments}) => {
    if (comments) {
        const commentsRender = comments.map((c) => {
            return (
                <div key={c.id}>
                    - {c.comment} - {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(Date.parse(c.date)))}
                </div>
            )
        })
        return (
            <div> Comments: {commentsRender} </div>
        )
    } else {
        return (
            <div/>
        )
    }
}

const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments}/>
                </div>
            </div>
        </div>
    );
}


export default DishDetail;
