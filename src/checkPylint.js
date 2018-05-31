import $ from 'jquery';
import readList from './list'

export default function check_syntax(code, result_cb)
{	
    //Example error for guideline
    var error_list = [{
        line_no: null,
        column_no_start: null,
        column_no_stop: null,
        fragment: null,
        message: null,
        severity: null
    }];
    
    //Push and replace errors
    function check(errors){
        //Split errors individually by line => list
        //var tokens = errors.split(/\r?\n/);
        var number,message, severity, severity_color, id;
        //Regex for fetching number
        
        //Clear array.
        error_list = [{
            line_no: null,
            column_no_start: null,
            column_no_stop: null,
            fragment: null,
            message: null,
            severity: null
        }];
        //console.log(errors);
        document.getElementById('errorslist').innerHTML = '';
           $('#errorslist').append("<tr>"+"<th>Line</th>"+"<th>Severity</th>"+
               "<th>Error</th>"+ "<th>More Info</th>"+"</tr>");

           //console.log(errors)
        for(var x = 2; x < errors.length; x+=2){

            //Sorting into line_no, etc.
            //var match_number = errors[x].match(/\d+/);
            //number = parseInt(match_number[0], 10);
            //severity = errors[x].charAt(0);
            //Split code based on colon
            var message_split = errors[x].split(':');
            //console.log(message_split);

            number = message_split[1] - 14 + 6;

            //temp fix
            if(number>0)
            {
                number = message_split[1] - 14;

                //Get severity after second colon
                severity = message_split[2].charAt(2);

                //Get message id by splitting
                id = message_split[2].substring(2,7);

                //Split to get message
                message_split = message_split[2].split("]");
                message = message_split[1];
                
                //Set severity to necessary parameters
                if(severity=="E"){
                    //console.log("error");
                    severity="error";
                    severity_color="red";
                } else if(severity=="W"){
                    //console.log("error");
                    severity="warning";
                    severity_color="yellow";
                }
                //Push to error list		
                error_list.push({
                    line_no: number, 
                    column_no_start: null,
                    column_no_stop: null,
                    fragment: null,
                    message: message, 
                    severity: severity
                });

                //Get help message for each id
                var moreinfo = getHelp(id);
                //Append all data to table
                   $('#errorslist').append("<tr>"+"<td>" + number + "</td>"
                       +"<td style=\"background-color:"+severity_color+";\"" + 
                       ">" + severity + "</td>"
                       +"<td>" + message + "</td>"
                       +"<td>" + moreinfo + "</td>"+"</tr>");
            }

            

        }
        
        //console.log("error_list"+error_list.toString());
        result_cb(error_list);

    }
    //AJAX call to pylint
    $.getJSON('http://localhost:5000/check_code', {
      text :  code
    }, function(data) {
        //console.log(data);
        var current_text = data;
        //Check Text
        check(current_text);
        return false;
    });
}

function getHelp(id){
    var list = readList();
    for( var i = 0, len = list.length; i < len; i++ ) {
      if( list[i][0] === id ) {
        return list[i][1];
      }
    }
    return "No information at the moment";
}