import React, { Component } from 'react';
import './App.css';

class Example extends Component {
    handleClick(e){
        e.preventDefault();
        var id = this.props.value;
        var errorsList = [
            "methods = []\nfor i in range(10):\n    methodds.append(lambda x: x + i)\nprint methods[0](10)",
            "for i in range(5):\n    print i\n",
            "print [x*x for x in range(20) if x % 2 == 0]",
            "print 45**123",
            "print \"%s:%r:%d:%x\\n%#-+37.34o\" % (\n        \"dog\",\n        \"cat\",\n        23456,\n        999999999999L,\n        0123456702345670123456701234567L)",
            "def genr(n):\n    i = 0\n    while i < n:\n        yield i\n        i += 1\n\nprint list(genr(12))\n",
            "# obscure C3 MRO example from Python docs\nclass O(object): pass\nclass A(O): pass\nclass B(O): pass\nclass C(O): pass\nclass D(O): pass\nclass E(O): pass\nclass K1(A,B,C): pass\nclass K2(D,B,E): pass\nclass K3(D,A): pass\nclass Z(K1,K2,K3): pass\nprint Z.__mro__\n",
            "import document\n\npre = document.getElementById('edoutput')\npre.innerHTML = '''\n<h1> Skulpt can also access DOM! </h1>\n''' \n"
        ];
        var text = errorsList[id-1]
        window.editor.setValue(text);
        window.editor.focus();
    }

    render()
    {
        return(
            <button className= "Example" id={'codeexample'+this.props.value} onClick={this.handleClick.bind(this)}>{this.props.value}</button>
        )
    }

}

class ExampleBox extends Component {
  renderExample(i) {
    return <Example value={i} />;
  }

  render() {
    return (
        <div className="ExampleBox text-center">
            <p> Examples: 
                {this.renderExample(1)}
                {this.renderExample(2)}
                {this.renderExample(3)}
                {this.renderExample(4)}
                {this.renderExample(5)}
                {this.renderExample(6)}
                {this.renderExample(7)}
            </p>
        </div>
    );
  }
}

export default ExampleBox;
