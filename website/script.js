const myImage = document.getElementById('myImage');
const myImagePrev = document.getElementById('myImagePrev');
const myImageNext = document.getElementById('myImageNext');

const tentoonTitel = document.getElementById("tentoonTitel");
const tentoonText = document.getElementById("tentoonText");

const imyTitle = document.getElementById("imyTitle");
const imyImage = document.getElementById("imyImage");
const imyInput = document.getElementById("imyInput");

var image = 0;
var taal = "Nederlands";

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

    DisplayNext(image);
    DisplayPrev(image);
    changeText(image);
}

function PreviousImage(){
    image = image - 1;
    if (image < 0)
    {
        image = 3
    }
    myImage.src = "img/tentoonstelling"+ image +".jpg";

    DisplayNext(image);
    DisplayPrev(image);
    changeText();
}

function changeText()
{
    if (image == 0)
    {
        if (taal == "Nederlands")
        {
            tentoonTitel.innerHTML = "De scheepsornamenten";
            tentoonText.innerHTML = "Het versieren van schepen is van alle tijden en nationaliteiten. Grieken, Romeinen, Vikingen en Hollanders: allemaal versierden ze hun schepen met schilderingen, houtsnijwerk en beelden die bol stonden van de symboliek. Het versterkte de identiteit en afkomst van een schip en haar bemanning. Ook nu nog wemelt het op het water van de gekleurde roerklikken, roerkoppen, mastschilden, mastwortels en stevenversieringen. Op aken die momenteel over ons IJsselmeer varen, tref je bijvoorbeeld vaak een liggende leeuw op de helmstok van het schip.";
        }
        else
        {
            tentoonTitel.innerHTML = "The ship ornaments";
            tentoonText.innerHTML = "Decorating ships is of all times and nationalities. Greeks, Romans, Vikings and Dutch: they all decorated their ships with paintings, carvings and statues that were full of symbolism. It reinforced the identity and ancestry of a ship and her crew. Even today the water is teeming with colored rudder clicks, rudder heads, mast shields, mast roots and stern decorations. For example, on barges that are currently sailing over our IJsselmeer, you often find a reclining lion on the tiller of the ship.";
        }
    } 
    else if (image == 1) 
    {
        if (taal == "Nederlands")
        {
            tentoonTitel.innerHTML = "Het verhaal van de walvis";
            tentoonText.innerHTML = "In de 16e eeuw wisten mensen nog maar weinig van walvissen. Ze vonden het vooral griezelige zeemonsters. Toen de Nederlandse zeeman Willem Barentsz op ontdekkingstocht ging naar de Noordelijke IJszee veranderde het beeld van de walvis. In de Noordelijke IJszee wemelde het van de walvissen en het viel Willem op hoe makkelijk ze zich lieten vangen. Steeds meer mensen gingen op walvisjacht, omdat je met de vangst van een walvis veel geld kon verdienen. Het vlees, de olie uit het spek en de baleinen van de walvis brachten op de markt veel geld op.";
        }
        else
        {
            tentoonTitel.innerHTML = "The Tale of the Whale";
            tentoonText.innerHTML = "In the 16th century, people knew very little about whales. They thought it was especially creepy sea monsters. When the Dutch sailor Willem Barentsz went on a voyage of discovery to the Arctic Ocean, the image of the whale changed. The Arctic Ocean was teeming with whales and Willem noticed how easy they were to catch. More and more people went whale hunting, because you could earn a lot of money by catching a whale. The meat, oil from the bacon and whalebones fetched a lot of money in the market.";
        }
    } 
    else if (image == 2) 
    {
        if (taal == "Nederlands")
        {
            tentoonTitel.innerHTML = "Willem van de Velde & zoon";
            tentoonText.innerHTML = "De overzichtstentoonstelling Willem van de Velde & Zoon neemt je mee in de maritieme wereld van de Van de Veldes, het 'oorlogscorrespondentschap' van vader Willem en voert je langs ruwe schetsen, kalme zeegezichten, dramatische stormen en monumentale zeeslagen. Het is de eerste keer wereldwijd dat er zoveel werken van beide kunstenaars tegelijkertijd te zien zijn.";
        }
        else
        {
            tentoonTitel.innerHTML = "Willem van de Velde & zoon";
            tentoonText.innerHTML = "The retrospective exhibition Willem van de Velde & zoon takes you into the maritime world of the Van de Veldes, the 'war correspondentship' of father Willem and takes you past rough sketches, calm seascapes, dramatic storms and monumental naval battles. It is the first time worldwide that so many works by both artists are on display at the same time."; 
        }
    } 
    else if (image == 3) 
    {
        if (taal == "Nederlands")
        {
            tentoonTitel.innerHTML = "De jachtmodellen";
            tentoonText.innerHTML = "De jachtmodellen zijn zeer divers en bestaan onder andere uit: spiegeljachten, paviljoenjachten, boeiers, tjotters en hekjachten…deze scheepsmodellen zijn net zo kunstig gemaakt als het origineel. Zelfs de versiering van de modellen is net zo rijk als de originele jachten.In de modellen is grote aandacht voor detail. Je zal dan ook de neiging krijgen je neus tegen het glas van de vitrine te duwen om elk klein detail te komen bewonderen!De tentoonstelling geeft een mooie overview van jachtmodellen door de jaren heen.";
        }
        else
        {
            tentoonTitel.innerHTML = "The yacht models";
            tentoonText.innerHTML = "The yacht models are very diverse and include: transom yachts, pavilion yachts, bouys, tjotters and stern yachts… these ship models are just as artfully made as the original. Even the decoration of the models is just as rich as the original yachts. Great attention to detail is given in the models. You will also have the urge to push your nose against the glass of the display case to admire every little detail! The exhibition gives a nice overview of yachts models over the years.";
        }
    }
    console.log(image);
    console.log(taal);
}

const headerTitel = document.getElementById("headerTitel")
const Button1 = document.getElementById("Button1")
const Button2 = document.getElementById("Button2")
const Button3 = document.getElementById("Button3")
const Button4 = document.getElementById("Button4")
const geschiedenisTitel = document.getElementById("geschiedenisTitel")
const Geschiedenis = document.getElementById("Geschiedenis")
const Titel1 = document.getElementById("Titel1")
const Tijden = document.getElementById("Tijden")
const Titel2 = document.getElementById("Titel2")
const Vakanties = document.getElementById("Vakanties")
const Titel3 = document.getElementById("Titel3")
const Prijzen = document.getElementById("Prijzen")
const contact = document.getElementById("contact")
const ContactInfo = document.getElementById("ContactInfo")



function ChangeNL(){
    headerTitel.innerHTML = "SCHEEPVAART MUSEUM AMSTERDAM";
    headerTitel.style.fontSize = "25px";
    Button1.innerHTML = "Home";
    Button2.innerHTML = "Prijzen";
    Button3.innerHTML = "Tijden";
    Button4.innerHTML = "Contact";
    geschiedenisTitel.innerHTML = "Museum Geschiedenis";
    Geschiedenis.innerHTML = "Het Scheepvaartmuseum (voorheen Nederlands Scheepvaartmuseum Amsterdam) is een Nederlands museum aan het Kattenburgerplein 1 in Amsterdam over de scheepvaart en de maritieme geschiedenis. Het is gevestigd in het gebouw van het voormalige 's Lands Zeemagazijn en bevat de op een na grootste maritieme collectie ter wereld. Het is gespecialiseerd in de maritieme geschiedenis van Nederland.";
    Titel1.innerHTML = "Tijden";
    Tijden.innerHTML = "Maandag: dicht <br> Dinsdag: 10.00-17.00 <br> Woensdag: 10.00-17.00 <br> Donderdag: 10.00-17.00 <br>Vrijdag: 10.00-17.00 <br> Zaterdag: 10.00-17.00 <br> Zondag: 10.00-17.00";
    Titel2.innerHTML = "Vakantie tijden";
    Vakanties.innerHTML = "Maandag T/M Vrijdag: 10.00-17.00";
    Titel3.innerHTML = "Prijzen";
    Prijzen.innerHTML = "Kind 0 T/M 3: €0,00 <br> Kind 4 T/M 17: €8,00 <br> Volwassenen: €16,50 <br> Student: €8,00 <br> Museum kaart: €0,00 <br> Stadspas: €0,00";
    contact.innerHTML = "Contact";
    ContactInfo.innerHTML = "Telefoonnummer: 020 523 2222 <br> Email: info@hetscheepvaartmuseum.nl <br> Adres: Kattenburgerplein 1 1018 KK Amsterdam ";
    taal = "Nederlands";
    changeText();
}

function ChangeEN(){
    headerTitel.innerHTML = "NATIONAL MARITIME MUSEUM OF AMSTERDAM";
    headerTitel.style.fontSize = "22px";
    Button1.innerHTML = "Home";
    Button2.innerHTML = "Prices";
    Button3.innerHTML = "Opening Hours";
    Button4.innerHTML = "Contact";
    geschiedenisTitel.innerHTML = "Museum History";
    Geschiedenis.innerHTML = "The Maritime museum (formerly Nederlands Maritime museum Amsterdam) is a Dutch museum at Kattenburgerplein 1 in Amsterdam about shipping and maritime history. It is located in the building of the former 's Lands Zeemagazijn (the Arsenal) and contains the second largest maritime collection in the world. It is specialized in the maritime history of the Netherlands.";
    Titel1.innerHTML = "Opening Hours";
    Tijden.innerHTML = "Monday: closed <br> Tuesday: 10.00-17.00 <br> Wednesday: 10.00-17.00 <br> Thursday: 10.00-17.00 <br>Friday: 10.00-17.00 <br> Saturday: 10.00-17.00 <br> Sunday: 10.00- 17.00";
    Titel2.innerHTML = "Holiday Opening hours";
    Vakanties.innerHTML = "Monday to Friday: 10.00-17.00";
    Titel3.innerHTML = "Prices";
    Prijzen.innerHTML = "Child 0 to 3: €0.00 <br> Child 4 to 17: €8.00 <br> Adults: €16.50 <br> Student: €8.00 <br> Museum card: € 0.00 <br> City pass: €0.00";
    contact.innerHTML = "Contact";
    ContactInfo.innerHTML = "Phone number: 020 523 2222 <br> Email: info@hetscheepvaartmuseum.nl <br> Address: Kattenburgerplein 1 1018 KK Amsterdam";
    taal = "Engels";
    changeText();
}

// interactieve route

let ingang =
[{
    "titel":"plaats 0",
    "image":"interactieveroutefotos/ingang/0.jpg"
},
{
    "titel":"plaats 1",
    "image":"interactieveroutefotos/ingang/1.jpg"
},
{
    "titel":"plaats 2",
    "image":"interactieveroutefotos/ingang/2.jpg"
},
{
    "titel":"plaats 3",
    "image":"interactieveroutefotos/ingang/3.jpg"
},
{
    "titel":"plaats 4",
    "image":"interactieveroutefotos/ingang/4.jpg"
}]

let kamer1 =
[{
    "titel":"plaats 0",
    "image":"interactieveroutefotos/kamer1/0.jpg"
},
{
    "titel":"plaats 1",
    "image":"interactieveroutefotos/kamer1/1.jpg"
},
{
    "titel":"plaats 2",
    "image":"interactieveroutefotos/kamer1/2.jpg"
},
{
    "titel":"plaats 3",
    "image":"interactieveroutefotos/kamer1/3.jpg"
},
{
    "titel":"plaats 4",
    "image":"interactieveroutefotos/kamer1/4.jpg"
},
{
    "titel":"plaats 5",
    "image":"interactieveroutefotos/kamer1/5.jpg"
},
{
    "titel":"plaats 6",
    "image":"interactieveroutefotos/kamer1/6.jpg"
}]

let kamer2 =
[{
    "titel":"plaats 0",
    "image":"interactieveroutefotos/kamer2/0.jpg"
},
{
    "titel":"plaats 1",
    "image":"interactieveroutefotos/kamer2/1.jpg"
},
{
    "titel":"plaats 2",
    "image":"interactieveroutefotos/kamer2/2.jpg"
}]

function showIngang(index){
    imyTitle.innerHTML =ingang[index].titel;
    imyImage.src = ingang[index].image;
}

function show(index){
    imyTitle.innerHTML =kamer1[index].titel;
    imyImage.src = kamer1[index].image;
}

function show(index){
    imyTitle.innerHTML =kamer2[index].titel;
    imyImage.src = kamer2[index].image;
}

function getInput(){
    showIngang(imyInput.value);
    imyInput.value = "";
    imyInput.focus(); 
}