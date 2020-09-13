import React, {Component} from "react";
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        const title = <div>Title</div>;
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id + 1} className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                {title}
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;