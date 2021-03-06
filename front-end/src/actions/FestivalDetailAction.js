import $ from "jquery";
// import axios from "axios";

var FestivalDetail = (festivalDetailData,updatedRating)=>{
	if(festivalDetailData === 'updateRating'){
	   	return{
	   		type: "FESTIVAL_DETAIL_UPDATE",
	   		payload: updatedRating		
	   	}
	}else{
	    var thePromise = $.ajax({
	        method: "GET",
	        url: "http://localhost:3000/festivals/festivalDetail",
	        data: festivalDetailData
	    });
	    return{
	        type: "FESTIVAL_DETAIL",
	        payload: thePromise
	    }
	}
}

export default FestivalDetail;
