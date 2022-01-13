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

    DisplayNext(image);
    DisplayPrev(image);
}

const headerTitel = document.getElementById("headerTitel")
const Button1 = document.getElementById("Button1")
const Button2 = document.getElementById("Button2")
const Button3 = document.getElementById("Button3")
const Button4 = document.getElementById("Button4")
const geschiedenisTitel = document.getElementById("geschiedenisTitel")
const Geschiedenis = document.getElementById("Geschiedenis")
const tentoonTitel1 = document.getElementById("tentoonTitel1")
const tentoonTitel2 = document.getElementById("tentoonTitel2")
const tentoonTitel3 = document.getElementById("tentoonTitel3")
const tentoonTitel4 = document.getElementById("tentoonTitel4")
const tentoonText1 = document.getElementById("tentoonText1")
const tentoonText2 = document.getElementById("tentoonText2")
const tentoonText3 = document.getElementById("tentoonText3")
const tentoonText4 = document.getElementById("tentoonText4")
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
    Button1.innerHTML = "Home";
    Button2.innerHTML = "Prijzen";
    Button3.innerHTML = "Tijden";
    Button4.innerHTML = "Contact";
    geschiedenisTitel.innerHTML = "Museum Geschiedenis";
    Geschiedenis.innerHTML = "Het Scheepvaartmuseum (voorheen Nederlands Scheepvaartmuseum Amsterdam) is een Nederlands museum aan het Kattenburgerplein 1 in Amsterdam over de scheepvaart en de maritieme geschiedenis. Het is gevestigd in het gebouw van het voormalige 's Lands Zeemagazijn en bevat de op een na grootste maritieme collectie ter wereld. Het is gespecialiseerd in de maritieme geschiedenis van Nederland.";
    tentoonTitel1.innerHTML = "De scheepsornamenten";
    tentoonTitel2.innerHTML = "Het verhaal van de walvis";
    tentoonTitel3.innerHTML = "Willem van de Velde & zoon";
    tentoonTitel4.innerHTML = "De jachtmodellen";
    tentoonText1.innerHTML = "Het versieren van schepen is van alle tijden en nationaliteiten. Grieken, Romeinen, Vikingen en Hollanders: allemaal versierden ze hun schepen met schilderingen, houtsnijwerk en beelden die bol stonden van de symboliek. Het versterkte de identiteit en afkomst van een schip en haar bemanning. Ook nu nog wemelt het op het water van de gekleurde roerklikken, roerkoppen, mastschilden, mastwortels en stevenversieringen. Op aken die momenteel over ons IJsselmeer varen, tref je bijvoorbeeld vaak een liggende leeuw op de helmstok van het schip.";
    tentoonText2.innerHTML = "In de 16e eeuw wisten mensen nog maar weinig van walvissen. Ze vonden het vooral griezelige zeemonsters. Toen de Nederlandse zeeman Willem Barentsz op ontdekkingstocht ging naar de Noordelijke IJszee veranderde het beeld van de walvis. In de Noordelijke IJszee wemelde het van de walvissen en het viel Willem op hoe makkelijk ze zich lieten vangen. Steeds meer mensen gingen op walvisjacht, omdat je met de vangst van een walvis veel geld kon verdienen. Het vlees, de olie uit het spek en de baleinen van de walvis brachten op de markt veel geld op.";
    tentoonText3.innerHTML = "De overzichtstentoonstelling Willem van de Velde & Zoon neemt je mee in de maritieme wereld van de Van de Veldes, het 'oorlogscorrespondentschap' van vader Willem en voert je langs ruwe schetsen, kalme zeegezichten, dramatische stormen en monumentale zeeslagen. Het is de eerste keer wereldwijd dat er zoveel werken van beide kunstenaars tegelijkertijd te zien zijn.";
    tentoonText4.innerHTML = "De jachtmodellen zijn zeer divers en bestaan onder andere uit: spiegeljachten, paviljoenjachten, boeiers, tjotters en hekjachten…deze scheepsmodellen zijn net zo kunstig gemaakt als het origineel. Zelfs de versiering van de modellen is net zo rijk als de originele jachten.In de modellen is grote aandacht voor detail. Je zal dan ook de neiging krijgen je neus tegen het glas van de vitrine te duwen om elk klein detail te komen bewonderen!De tentoonstelling geeft een mooie overview van jachtmodellen door de jaren heen.";
    Titel1.innerHTML = "Tijden";
    Tijden.innerHTML = "Maandag: dicht <br> Dinsdag: 10.00-17.00 <br> Woensdag: 10.00-17.00 <br> Donderdag: 10.00-17.00 <br>Vrijdag: 10.00-17.00 <br> Zaterdag: 10.00-17.00 <br> Zondag: 10.00-17.00";
    Titel2.innerHTML = "Vakantie tijden";
    Vakanties.innerHTML = "Maandag T/M Vrijdag: 10.00-17.00";
    Titel3.innerHTML = "Prijzen";
    Prijzen.innerHTML = "Kind 0 T/M 3: €0,00 <br> Kind 4 T/M 17: €8,00 <br> Volwassenen: €16,50 <br> Student: €8,00 <br> Museum kaart: €0,00 <br> Stadspas: €0,00";
    contact.innerHTML = "Contact";
    ContactInfo.innerHTML = "Telefoonnummer: 020 523 2222 <br> Email: info@hetscheepvaartmuseum.nl <br> Adres: Kattenburgerplein 1 1018 KK Amsterdam ";
}

function ChangeEN(){
    headerTitel.innerHTML = "NATIONAL MARITIME MUSEUM OF AMSTERDAM";
    Button1.innerHTML = "Home";
    Button2.innerHTML = "Prices";
    Button3.innerHTML = "Opening Hours";
    Button4.innerHTML = "Contact";
    geschiedenisTitel.innerHTML = "Museum History";
    Geschiedenis.innerHTML = "The Maritime museum (formerly Nederlands Maritime museum Amsterdam) is a Dutch museum at Kattenburgerplein 1 in Amsterdam about shipping and maritime history. It is located in the building of the former 's Lands Zeemagazijn (the Arsenal) and contains the second largest maritime collection in the world. It is specialized in the maritime history of the Netherlands.";
    tentoonTitel1.innerHTML = "The ship ornaments";
    tentoonTitel2.innerHTML = "The Tale of the Whale";
    tentoonTitel3.innerHTML = "Willem van de Velde & zoon";
    tentoonTitel4.innerHTML = "The yacht models";
    tentoonText1.innerHTML = "Decorating ships is of all times and nationalities. Greeks, Romans, Vikings and Dutch: they all decorated their ships with paintings, carvings and statues that were full of symbolism. It reinforced the identity and ancestry of a ship and her crew. Even today the water is teeming with colored rudder clicks, rudder heads, mast shields, mast roots and stern decorations. For example, on barges that are currently sailing over our IJsselmeer, you often find a reclining lion on the tiller of the ship.";
    tentoonText2.innerHTML = "In the 16th century, people knew very little about whales. They thought it was especially creepy sea monsters. When the Dutch sailor Willem Barentsz went on a voyage of discovery to the Arctic Ocean, the image of the whale changed. The Arctic Ocean was teeming with whales and Willem noticed how easy they were to catch. More and more people went whale hunting, because you could earn a lot of money by catching a whale. The meat, oil from the bacon and whalebones fetched a lot of money in the market.";
    tentoonText3.innerHTML = "The retrospective exhibition Willem van de Velde & zoon takes you into the maritime world of the Van de Veldes, the 'war correspondentship' of father Willem and takes you past rough sketches, calm seascapes, dramatic storms and monumental naval battles. It is the first time worldwide that so many works by both artists are on display at the same time.";
    tentoonText4.innerHTML = "The yacht models are very diverse and include: transom yachts, pavilion yachts, bouys, tjotters and stern yachts… these ship models are just as artfully made as the original. Even the decoration of the models is just as rich as the original yachts. Great attention to detail is given in the models. You will also have the urge to push your nose against the glass of the display case to admire every little detail! The exhibition gives a nice overview of yachts models over the years.";
    Titel1.innerHTML = "Opening Hours";
    Tijden.innerHTML = "Monday: closed <br> Tuesday: 10.00-17.00 <br> Wednesday: 10.00-17.00 <br> Thursday: 10.00-17.00 <br>Friday: 10.00-17.00 <br> Saturday: 10.00-17.00 <br> Sunday: 10.00- 17.00";
    Titel2.innerHTML = "Holiday Opening hours";
    Vakanties.innerHTML = "Monday to Friday: 10.00-17.00";
    Titel3.innerHTML = "Prices";
    Prijzen.innerHTML = "Child 0 to 3: €0.00 <br> Child 4 to 17: €8.00 <br> Adults: €16.50 <br> Student: €8.00 <br> Museum card: € 0.00 <br> City pass: €0.00";
    contact.innerHTML = "Contact";
    ContactInfo.innerHTML = "Phone number: 020 523 2222 <br> Email: info@hetscheepvaartmuseum.nl <br> Address: Kattenburgerplein 1 1018 KK Amsterdam";
}