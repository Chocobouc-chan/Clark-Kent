import React from "react"
import {connect} from "react-redux"

const ConnectedList = ({articles}) => (
    <div>
        {articles.map((article) => {
            return <li key={article.id}>{article.title}</li>
        })}
    </div>
)


function mapStateToProps(state){
    return {articles: state.articles}
}

const List = connect(mapStateToProps)(ConnectedList)

export default List