function CreateDiv(name, description, img, author, link) {
    // get main div
    var MainDiv = document.getElementById('database-div');
    MainDiv.className = 'main-div';
    //new link
    var A = document.createElement('a');
    A.href = link;
    //new button and properties
    var Btn = document.createElement('button');
    Btn.className = 'button'
        //new div
    var NewDiv = document.createElement('div');
    // make new div flex
    NewDiv.className = 'new-div';


    //imgdiv
    var ImgDiv = document.createElement('div');
    ImgDiv.className = 'img-div';
    var Img = document.createElement('img');
    Img.className = 'img';
    Img.src = img;
    ImgDiv.appendChild(Img);
    NewDiv.appendChild(ImgDiv)



    //create text div
    var TextDiv = document.createElement('div');
    TextDiv.className = 'text-div';
    // create heading
    var Heading = document.createElement('h1');
    // write the inner text in heading
    Heading.innerText = name;
    //change color from theme blue to black
    Heading.className = 'heading';

    //heading 3
    var desheading = document.createElement('h3')
    desheading.innerText = 'Description';
    desheading.style.textAlign = 'left';
    desheading.style.marginLeft = '5vh';


    //add heading to text div
    TextDiv.appendChild(Heading);
    TextDiv.appendChild(desheading);
    //add textdiv to newdiv
    NewDiv.appendChild(TextDiv);
    //add newdiv to btn
    Btn.appendChild(NewDiv);
    //add btn to maindiv
    A.appendChild(Btn);
    MainDiv.appendChild(A);


    //create text
    var Description = document.createElement('p');
    Description.innerText = description;
    Description.style.textAlign = 'left';
    //give desciption margin
    Description.style.marginLeft = '5vh';
    Description.style.fontSize = '13.5px';
    //add description to textdiv
    TextDiv.appendChild(Description);


    var autheading = document.createElement('h3');
    autheading.innerText = 'Author';
    autheading.style.textAlign = 'left';
    autheading.style.marginLeft = '5vh';
    TextDiv.appendChild(autheading);
    var Author = document.createElement('p')
    Author.innerText = author;
    Author.style.textAlign = 'left';
    Author.style.marginLeft = '5vh';
    Author.style.fontSize = '13.5px';
    TextDiv.appendChild(Author);



}


var name1 = 'THE NEW OPTION: NUCLEAR ENERGY';
var des1 = 'This research study aims to highlight and discuss the technicalities behind most aspects and past incidents involved in obtaining nuclear energy';
var img_gen = 'images/research/';
var img1 = 'nuclear.jpg';
var author1 = 'Armaan Gupta, 2021';
var link1 = 'files/The new option_Nuclear Energy.pdf';

var name2 = 'Coronavirus: Analysing the Pandemic';
var des2 = 'This paper aims to cover the major aspects of this new disease with scientifically proved data.';
var img2 = 'coronavirus.jpg';
var link2 = 'files/coronavirus_analysing the pandemic.pdf';


CreateDiv(name1, des1, img_gen + img1, author1, link1);
CreateDiv(name2, des2, img_gen + img2, author1, link2);




function ChangeTab(event) {
    window.open(event + '.html', '_top')
}


function hamburger() {
    var HamDiv = document.getElementById('hamburger-options');
    var status = HamDiv.style.display;
    var bar1 = document.getElementById('bar1');
    var bar2 = document.getElementById('bar2');
    var bar3 = document.getElementById('bar3');

    if (status == 'block') {
        HamDiv.style.display = 'none';
        bar2.style.display = 'block';
        bar1.style.margin = '4px';
        bar3.style.margin = '4px';
        bar1.style.transform = 'rotate(0deg)';
        bar3.style.transform = 'rotate(0deg)';
    } else {
        HamDiv.style.display = 'block';
        bar2.style.display = 'none';
        bar1.style.margin = '10px 0 0 0';
        bar3.style.margin = '0';
        bar1.style.transform = 'rotate(45deg)';
        bar3.style.transform = 'rotate(-45deg)';
    }
}