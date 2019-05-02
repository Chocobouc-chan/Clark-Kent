import React from "react"
import {getData} from "./actions"
import {connect} from "react-redux"

class Post extends React.Component {

    constructor() {
        super();
    }

    componentWillMount() {
        this.props.getData()
    }

    render() {
        return (
            <ul className="list-group list-group-flush">
                {this.props.articles.map(el => (
                    <li className="list-group-item" key={el.id}>
                        {el.title}
                    </li>
                ))}
            </ul>
        );
    }

}

function mapStateToProps(state){
    return {articles: state.remoteArticles.slice(0,10)}
}

export default connect(mapStateToProps, {getData})(Post);