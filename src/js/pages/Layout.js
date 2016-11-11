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
        this.state = {
            value: '# Heading ' +
            '\n## Sub-heading ' +
            '\n### We gotta go deeper ' +
            '\n--- ' +
            '\n#### Deeper ' +
            '\n##### Sooooo deeeeep ' +
            '\n###### Not much deeper than this though. ' +
            '\n___ ' +
            '\n' +
            '\nThis is some *italic*, **bold** and **__strong emphasis__** ~~delete this~~ ' +
            '\n' +
            '\n1. Ordered list-item ' +
            '\n2. Ordered list-item ' +
            '\n3. Ordered list-item ' +
            '\n' +
            '\n* Unordered list-item ' +
            '\n* Unordered list-item ' +
            '\n* Unordered list-item ' +
            '\n*** ' +
            '\n' +
            '\nThis is a `inline code` example ' +
            '\n' +
            '\n``` javascript ' +
            '\n/* This is a code block */ ' +
            '\nvar foo = "bar"; ' +
            '\nalert(foo); ``` ' +
            '\n' +
            '\n#### [Checkout this project on GitHub](https://github.com/bjornhutter/markdown) ' +
            '![alt text](http://bjornhutter.com/img/logos/bjorn_hutter_fav_icon_black.png "Bjorn Hutter Favicon") '
        };
    }

    handleChange() {
        this.setState({value: this.refs.textarea.value});
    }

    getRawMarkup() {
        return {__html: marked(this.state.value)};
    }

    render() {
        return (
            <div class="container" style={{backgroundColor: '#f9f9f9'}}>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-2">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="" href="http://bjornhutter.com"><img class="branding-logo"
                                                                           src="http://bjornhutter.com/img/logos/bjorn_hutter_logo_white.svg"/></a>
                        </div>

                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                            <ul class="nav navbar-nav">
                                <li><a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
                                       target="_blank">Markdown
                                    Cheatsheet</a></li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="https://se.linkedin.com/in/björn-hutter-85581b121" target="_blank"><i
                                    class="fa fa-linkedin"></i></a></li>
                                <li><a href="https://github.com/bjornhutter/markdown" target="_blank"><i
                                    class="fa fa-github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="text-center">React GitHub Markdown App</h1>
                        <div class="col-lg-6">
                            <div class="">
                                <h2>Input:</h2>
                            </div>
                            <textarea class="form-control" rows="32"
                                      onChange={this.handleChange} ref="textarea" defaultValue={this.state.value}/>
                        </div>
                        <div>
                            <h2>Output:</h2>
                            <div class="col-lg-5 col-lg-offset-1" dangerouslySetInnerHTML={this.getRawMarkup()}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}