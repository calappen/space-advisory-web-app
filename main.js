// global variable to determind what index we are on
var curPage;
var currentOption;
var optionSelected = false;
var record = [];
var pageRecord = [];
var optBtns = []; // array of option buttons
var img, intro, optionBtn1, optionBtn2, optionBtn3, submitBtn, backBtn, info;


function homeStart(){

  // Load Glossary to Page:

  var str = '<ul class="glossarySearch" id="myUL">'

  glossary.forEach(function(term, index) {
    str += '<li><a href="#" onclick="displaySelectedTerm('+index+'); return false">'+ term[0] + '</a></li>';
    str += '<div id="termIndex'+index+'" class="definitions" style="display: none;">' + term[1] + '</div>';
  });

  str += '</ul>';

  document.getElementById("glossaryContainer").innerHTML = str;

}

function loadGlossary()
{
  var list = document.getElementById('glossaryList');
  glossary.forEach(function(term, index){

    var dt = document.createElement("DT");
    var dd = document.createElement("DD");

    dt.innerHTML = term[0];
    dd.innerHTML = term[1];

    list.appendChild(dt);
    dt.appendChild(dd);
    dt.classList.add("text-primary");
    dt.classList.add("font-weight-bold");
    dd.classList.add("text-muted");
    dd.classList.add("font-weight-normal");
  });
}

function start()
{

  // Load Glossary to Page:

  var str = '<ul class="glossarySearch" id="myUL">'

  glossary.forEach(function(term, index) {
    str += '<li><a href="#" onclick="displaySelectedTerm('+index+'); return false">'+ term[0] + '</a></li>';
    str += '<div id="termIndex'+index+'" class="definitions" style="display: none;">' + term[1] + '</div>';
  });

  str += '</ul>';

  document.getElementById("glossaryContainer").innerHTML = str;


  let item = localStorage.getItem('itemDescription');
  let location = localStorage.getItem('exportLocation');
  if (item != null){
    document.getElementById('itemDescriptionOutput').innerHTML = "Your item: " + item;
  }
  if (location != null){
    document.getElementById('exportDestinationOutput').innerHTML = "Export Location: " + location;
  }


	// initalize fields
 	intro = document.getElementById('introTxt');
  info = document.getElementById('info');
  img = document.getElementById('infoImage1');
	optionBtn1 = document.getElementById('optionBtn1');
	optionBtn2 = document.getElementById('optionBtn2');
	optionBtn3 = document.getElementById('optionBtn3');
	submitBtn = document.getElementById('submitBtn');
  backBtn = document.getElementById('backBtn');
	submitBtn.disabled = true;
  backBtn.disabled=true;

	// add options to array
	optBtns.push(optionBtn1);
	optBtns.push(optionBtn2);
	optBtns.push(optionBtn3);

	// set to first page
	updatePage(USML);
}
// set page fields
function updatePage(page)
{
  // Load page Information
  var question = document.getElementById('step');
  var paragraph = document.getElementById('infoParagraph1');
  var header = document.getElementById('infoHeader');


  //check if end of form is reached
  if (typeof page == "undefined") {
    goToOutput();
    return;
  }
  // update USML metadata

  curPage = page; // set global variable

  //disable submit button until option selected
 	submitBtn.disabled = true;
  //check if back button should be disabled (if on first page)
  if (record.length == 0) backBtn.disabled = true;
  else backBtn.disabled = false;
	//check if image exists
	if (page.img != "") img.src = page.img;
	else img.src = "";

	//set fields
  question.innerHTML = "Current Question: " + page.info;
	intro.innerHTML = page.info;
  header.innerHTML = page.header;
  paragraph.innerHTML = page.data;

  // reset all buttons to display:none
  for (i = 0; i < optBtns.length; i++) {
    optBtns[i].style.display = "none";
  }
  // set text for each button that exists on page and to display:block
	for (i = 0; i < page.options.length; i++) {
    optBtns[i].innerHTML = page.options[i][0];
    optBtns[i].style.display = "block";
	}
  // reset button classes so none are selected
  for (i = 0; i < optBtns.length; i++) {
    optBtns[i].classList.remove("btn-primary");
    optBtns[i].classList.add("btn-outline-primary");
  }
}

function startMod()
{
  var item = document.getElementById('itemDescription').value;
  var location = document.getElementById('exportDestination').value;
  localStorage.setItem('itemDescription', item);
  localStorage.setItem('exportLocation', location);
  window.location.href = "survey.html";
}

function setOption(x)
{
  // highlight selected option button
  for (i = 0; i < optBtns.length; i++) {
    optBtns[i].classList.remove("btn-primary");
    optBtns[i].classList.add("btn-outline-primary");
  }
  optBtns[x-1].classList.remove("btn-outline-primary");
  optBtns[x-1].classList.add("btn-primary");

  currentOption = x;
  optionSelected = true;
  submitBtn.disabled = false;
}

function goBack()
{
  updatePage(record.pop());
  submitBtn.style.display= "block";
  scrollToTop();
}

function submit() {
	// 1 = A, 2 = B, 3 = C
	if (currentOption == "1") {
		recordAns(curPage);
		updatePage(curPage.options[0][1]);
	}
	else if (currentOption == "2") {
		recordAns(curPage);
		updatePage(curPage.options[1][1]);
	}
	else if (currentOption == "3") {
		recordAns(curPage);
		updatePage(curPage.options[2][1]);
	}
	else return;
	//set option selected back to false for next page
 	optionSelected = false;

  scrollToTop();
}
// add option to recorded array
function recordAns (opt) {
	record.push(opt);
}
// goes to new output.html page
function goToOutput() {
  var form = document.createElement("form");
  // create element for each recorded answers
  var elements = [];
  for (i = 0; i < record.length; i++) {
    var temp = document.createElement("input");
    elements.push(temp);
  }
  form.method = "GET";
  form.action = "print.html";
  // send over each value
  for (i = 0; i < record.length; i++) {
    elements[i].value = record[i].metadata;
    elements[i].name = i.toString();
    form.appendChild(elements[i]);

  }
  document.body.appendChild(form);

  form.submit();
}
// display a recap of recorded answers
function displayOutput() {
  // DISPLAY export item/location
  let item = localStorage.getItem('itemDescription');
  let location = localStorage.getItem('exportLocation');
  if (item != null){
    document.getElementById('itemDescriptionOutput').innerHTML = "Your item: " + item;
  }
  if (location != null){
    document.getElementById('exportDestinationOutput').innerHTML = "Export Location: " + location;
  }

  // DISPLAY recorded answers:
  // get array of answers elements
  var answerList = document.getElementsByClassName('answers');
  // loop thru elements and assign values based on answers selected
  var i = 0;
  // only display if there is metadata
  while (getQueryString()[i] != undefined) {
    var str = getQueryString()[i].replace(/\+/g, ' '); // replace '+' with ' '
    answerList[i].innerText = str;
    i++
  }
}
function getQueryString() {
  var result = {}, queryString = location.search.slice(1),
      re = /([^&=]+)=([^&]*)/g, m;

  while (m = re.exec(queryString)) {
    result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }

  return result;
}

// display glossary term when clicked on
function displaySelectedTerm(selection) {
  var selectedTerm = document.getElementById("termIndex"+ selection);
  // collapse all terms
  glossaryItems = document.getElementsByClassName("definitions");
  for (i = 0; i < glossaryItems.length; i++) {
    if (selection != i) {
      glossaryItems[i].style.display = "none";
    }
  }
  // expand selected term
  if (selectedTerm.style.display == "none") {
    selectedTerm.style.display = "block";
  } else {
    selectedTerm.style.display = "none";
  }
}


function searchList() {
    // collapse all terms
    glossaryItems = document.getElementsByClassName("definitions");
    for (i = 0; i < glossaryItems.length; i++) {
      glossaryItems[i].style.display = "none";
    }

    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++)
    {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

if(optionSelected){
  $(document).ready(function(){
    $(".submitBtn").click(function(){
      $(".fadeContent").fadeOut(200).fadeIn(600);
    });
  });
}

//smooth scroll to top
const scrollToTop = () => {
const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 2);
  }
};
