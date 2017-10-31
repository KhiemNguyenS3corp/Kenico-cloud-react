import React, { Component } from 'react';

const language = {
    english: 'en-En',
    chinese: 'cn-Cn'
}

class Language extends Component {
    constructor(props){
        super(props)
        this.state={language: language.english}
    }

    changeEnglish=()=>{
        this.setState({ language: language.english})
    }
}