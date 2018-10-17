import React, {Component} from "react"

export class Disclaimer extends Component {
    render() {
        return <div style={{color: "#999", padding: 20}}>
            <i>Note: The example page is not tied to a API server. So all create, edit and delete calls will fail. For your development please make sure your server is listening to /models</i>
        </div>
    }
}