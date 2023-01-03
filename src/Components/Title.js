import './Profile.css'
import { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <h1 className='title'>{this.props.title}</h1>
        )
    }
    }
