import React from "react";
import ReactDOM from "react-dom";
import marked from "marked";

import Layout from "./pages/Layout";


const app = document.getElementById('app');

//console.log(marked('Im using __markdown__.'));

ReactDOM.render(<Layout/>, app);