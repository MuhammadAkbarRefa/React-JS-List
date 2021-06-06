import React, {Component} from 'react';

class Media extends Component {
    render() {
        return (
            <div className="media my-3">
                <img src={process.env.PUBLIC_URL+"/image/"+this.props.image}
                 className="mr-3" alt="media" width="30" height="30" />
                
                <div className="media-body text-left">
                <h5 className="mt-0">{this.props.title}</h5>
                </div>
            </div>
        );
    }
}

export default Media;