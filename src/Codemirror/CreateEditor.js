import check_syntax from './checkPylint'
import remoteValidator from './cm-validator-remote'
export default function createEditor(){
    window.editor = window.CodeMirror.fromTextArea(document.getElementById("txt"), {
      mode: {name: "python",
        version: 2,
        singleLineStringErrors: false},
      lineNumbers: true,
      indentUnit: 4,
      matchBrackets: true,
      lint:true,
      styleActiveLine:true,
      gutters: ["CodeMirror-lint-markers"],
      lintWith: {
        "getAnnotations": remoteValidator,
        "async" : true,
        "check_cb":check_syntax
      },
    });
}