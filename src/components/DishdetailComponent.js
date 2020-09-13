import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle, Navbar, NavbarBrand} from 'reactstrap';

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
        <RenderDish dish={props.dish}/>
        // renderDish(props.dish)
    );
}


export default DishDetail;
