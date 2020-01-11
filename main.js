var searchbar = $('#searchbar');
var resultsElement = $(".autocomplete ul");
var apiList;
function main(){
	addEventHandlers();
	resultsElement.hide();

}

function addEventHandlers(){
	searchbar.keyup(getApiResults);
}

function getApiResults() {
	var inputValue = searchbar.val();
	var searchUrl = "https://swapi.co/api/people/?search=";
	$.ajax(searchUrl+inputValue).done(
		function(result){
			console.log(result);
			apiList = result.results;
			resultsElement.empty();
			if(apiList.length > 0 && inputValue != ""){
				resultsElement.show(1);
				for(var i = 0; i<apiList.length;i++){
					resultsElement.append("<li class='option'>"+apiList[i].name+"</li>");
				}
			} else {
				resultsElement.hide(1);
			}
		}).fail(
		function() {
    		alert( "error getting api list" );
 	});
}


main();