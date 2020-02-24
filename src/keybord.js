const Rx = require('rxjs');
import {renderData, renderTable,} from "./code"
var row, column;
row= 20;
column= 10;
var button = document.querySelector('button');
Rx.Observable.fromEvent(button, 'click')
    .subscribe(() => renderData())

let keyPlus$ = Rx.Observable.fromEvent(window, 'keydown')
    .subscribe(() => {
            if (event.keyCode === 187 && event.shiftKey) {
                let content = prompt("Add Row or Column?", "Row");
                if (content.toLowerCase() === "row") {
                   console.log("1");
                    row++;
                    renderTable([row, column]);
                }else if(content.toLowerCase()=== "column"){
                    console.log("2");
                    column++;
                    renderTable([row, column]);
                }
            }else if(event.keyCode === 189 && event.shiftKey){
                let content = prompt("Delete Row or Column?", "Row");
                if (content.toLowerCase() === "row") {
                    console.log("1");
                    row--;
                    renderTable([row, column]);
                }else if(content.toLowerCase()=== "column"){
                    console.log("2");
                    column--;
                    renderTable([row, column]);
                }
            }
        }
    )

