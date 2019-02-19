/* Functions for Opening and Closing Side Navigation bars */
function openSideMenu(){
   	document.getElementById('sideMenu').style.width = '70%';
}
function closeSideMenu(){
	document.getElementById('sideMenu').style.width = '0%';
}

//var pickupTime = document.getElementById('pickupTime');

// function focus(){
// 	pickupTime.className = "dropdown";
// 	pickupTime.setAttribute('data-toggle','dropdown');
// 	pickupTime.setAttribute('id','dropdown');
// 	pickupTime.setAttribute('aria-expanded','false');
	
// 	var dropdownMenu = document.createElement('DROPDOWN-MENU');
// 	dropdownMenu.setAttribute('aria-labelledBy','dropdown');
// 	dropdownMenu.setAttribute('class','dropdown-menu');
// 	pickupTime.appendChild(dropdownMenu);
	
// 	var dropdownItem = document.createElement('DROPDOWN-ITEM');
// 	dropdownItem.setAttribute('class','dropdown-item');
// 	dropdownMenu.appendChild(dropdownItem);
	
// 	dropdownLink = document.createElement('DROPDOWN-LINK');
// 	dropdownLink.setAttribute('href','#');
// 	dropdownLink.innerHTML = "12:00 AM";
// 	dropdownItem.appendChild(dropdownLink);
// }
// pickupTime.addEventListener('click', focus());

/* Function for changing the cities and reflecting that change on another element */
var cities = document.querySelectorAll('.city');
var bikeRider = document.getElementById('bikeRider');
var cityArray =  Array.from(cities);
cityArray.forEach(function(city){
	city.addEventListener('click',function(event,target){
		bikeRider.textContent = "Bikes in" + " " + city.children[1].textContent;
	});
})

/* Creating a new element that will be appended to the form
on medium and small screens */
var mediumDevices = window.matchMedia("(min-width:320px) and (max-width:1024px)");
var contentContainer = document.getElementById('contentContainer');
if(mediumDevices.matches){
	
	/*Created a new element, gave it a class and appended it to
	contentContainer */
	var inputForm = document.createElement('inputForm');
	contentContainer.appendChild(inputForm);
	inputForm.className = "customForm";

	/*Created a new unordered list, gave it a class, added some styles to it and appended it to
	inputForm */
	var unorderedList = document.createElement('UL');
	inputForm.appendChild(unorderedList);

	/*Created a list item, gave it a class, added some styles to it and appended it to
	unorderedList */
	var listItemOne = document.createElement('LI');
	listItemOne.className = "listItemOne";
	listItemOne.classList.add('listItems');
	listItemOne.classList.add('active');
	listItemOne.style.textAlign = "center";
	unorderedList.appendChild(listItemOne);
	var linkItemOne = document.createElement('A');
	linkItemOne.setAttribute('href','#');
	linkItemOne.textContent = 'Search';
	listItemOne.appendChild(linkItemOne);

	/*Created a list item, gave it a class, added some styles to it and appended it to
	unorderedList */
	var listItemTwo = document.createElement('LI');
	listItemTwo.className = "listItemTwo";
	listItemTwo.classList.add('listItems');
	listItemTwo.style.textAlign = "center";
	unorderedList.appendChild(listItemTwo);
	var linkItemTwo = document.createElement('A');
	linkItemTwo.setAttribute('href','#');
	linkItemTwo.textContent = 'Inter City';
	listItemTwo.appendChild(linkItemTwo);

	/*Created an input field, gave it a class, added some styles to it and appended it to
	unorderedList */
	var inputField = document.createElement('INPUT');
	inputField.setAttribute('class','form-control');
	inputField.setAttribute('type','text');
	inputField.setAttribute('id','searchField');
	inputField.setAttribute('placeholder','Click here to rent a bike');
	inputForm.appendChild(inputField);
}

/* jQuery Part */
$(document).ready(function(){
	/* Toggling the Modal */
	if($(window).width() < 1024){
		$(window).on('load',function(){
        	$('#selectCity').modal('hide');
    	});
	}else{
		$(window).on('load',function(){
        	$('#selectCity').modal('show');
    	});
	}


	/* Adding animations to the dropdown-menu */
	$('.navbar-items .menu').on('mouseover', function(){
		$('.dropdown-menu').slideToggle(400);
	});


	/* Added features to the datepicker widget */
	$('#pickup').datepicker({
		showOtherMonths:true,
		selectOtherMonths:true,
		showButtonPanel:true,
		changeMonth:true,
		changeYear:true,
		numberOfMonths:1,
	    minDate:"today",
	    maxDate:"+12M",
	    showWeek:true,
	    firstDay:1
	});
	$('#drop').datepicker({
		showOtherMonths:true,
		selectOtherMonths:true,
		showButtonPanel:true,
		changeMonth:true,
		changeYear:true,
		numberOfMonths:1,
	    minDate:"today",
	    maxDate:"+12M",
	    showWeek:true,
	    firstDay:1
	});
});