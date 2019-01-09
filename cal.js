var first=0;
var second=0;
var ansstr="";
var arr = [];
function count() {
 var flag;
 }
count.flag=0;

$(document).ready(function(){
    $(".Btn").click(function(){
		var v = $(this);
        var value= v.attr("value");
		//alert(value);
			if((value=="."||value=="+"||value=="-"||value=="*"||value=="/"))
					count.flag+=1;
					else
					count.flag=0;
			   
			 if(count.flag>1)
               {
			   alert("Please Enter Number First");
				ansstr=ansstr;
				}
           	 else
	       {			 
			
			if(value=="=")
			  {
			  ansstr=ansstr;
			  var pre=ansstr;
 			 $("#ans").val(eval(ansstr));
			  ansstr=eval(ansstr);
               var post=ansstr;			 
			 arr.push(pre+"="+post);
			 }
			else
			 if(value=="c")
			  {
				ansstr = '';
				$("#ans").val('');
				flag=0;
				$('#ans').text('');	
    			$('#Htable tr').remove();
			  }
			  else
				 {  
				           if(count.flag<=1 && value!="H")
							 {ansstr=ansstr+value;
							 $("#ans").val(ansstr);	}
							 
							 
				}
			
				 
			 if(value=="H")
			 {       			 
				var table = $("<table />");
				table[0].border = "1";
				table[0].width = "94%";

 
        //Get the count of columns.
        var columnCount = 1;//arr.length;
          //alert(arr.length);
        //Add the header row.
        var row = $(table[0].insertRow(-1));
        for (var i = 0; i < columnCount; i++) {
            var headerCell = $("<th />");
            headerCell.html("History Details");
            row.append(headerCell);
        }
 
        //Add the data rows.
        for (var i = 0; i < arr.length; i++) {
            row = $(table[0].insertRow(-1));
          //  for (var j = 1; j < columnCount; j++) {
                var cell = $("<td />");
                cell.html(arr[i]);
                row.append(cell);
            }
        //}
 
        var HTable = $("#Htable");
        HTable.html("");
        HTable.append(table);
             
			  // alert(arr);
			 }
			 }
			 		 
			
    });
});
