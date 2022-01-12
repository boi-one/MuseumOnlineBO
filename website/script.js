const myImage = document.getElementById('myImage');
const myImagePrev = document.getElementById('myImagePrev');
const myImageNext = document.getElementById('myImageNext');

var image = 0;

function DisplayNext(image)
{
    image = image + 1;
    if (image > 3)
    {
        image = 0
    }
    myImageNext.src = "img/tentoonstelling"+ image +".jpg";
}

function DisplayPrev(image)
{
    image = image -1;
    if (image < 0)
    {
        image = 3
    }
    myImagePrev.src = "img/tentoonstelling"+ image +".jpg";
}

function NextImage(){
    image = image + 1;
    if (image > 3)
    {
        image = 0
    }
    myImage.src = "img/tentoonstelling"+ image +".jpg";
    
    console.log(image);
    DisplayNext(image);
    DisplayPrev(image);
}

function PreviousImage(){
    image = image - 1;
    if (image < 0)
    {
        image = 3
    }
    myImage.src = "img/tentoonstelling"+ image +".jpg";
    
    console.log(image);
    DisplayNext(image);
    DisplayPrev(image);
}
