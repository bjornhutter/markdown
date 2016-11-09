import React from "react";
import marked from "marked";

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});
export default class Layout extends React.Component {


    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value: 'Type some *markdown* **here!**'};
    }

    handleChange() {
        this.setState({value: this.refs.textarea.value});
    }

    getRawMarkup() {
        return {__html: marked(this.state.value)};
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="text-center">React GitHub Markdown App</h1>
                        <h4 class="text-center"><a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Markdown Cheatsheet</a></h4>
                        <div class="col-lg-6">
                            <h3>Input</h3>
                            <textarea class="form-control" rows="20"
                                      onChange={this.handleChange} ref="textarea" defaultValue={this.state.value}/>
                        </div>
                        <div>
                            <h3>Output</h3>
                            <div class="col-lg-5 col-lg-offset-1" dangerouslySetInnerHTML={this.getRawMarkup()}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}