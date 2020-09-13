import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle, Navbar, NavbarBrand} from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        const dish = this.props.dish;
        if(dish) {
            const comments = dish.comments.map((c) => {
                return (
                    <div key={c.id}>
                        - {c.comment} - {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}
                    </div>
                )
            })
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        Comments: {comments}
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            )
        }

    }
}

export default DishDetail;
