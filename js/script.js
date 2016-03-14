var submitButton = document.getElementsByClassName("submitButton")[0];
var personOneTalk = document.getElementById("personOneTalk");
var personTwoSays = document.getElementById("personTwoSays");
var personTwoTalk = document.getElementById("personTwoTalk");
var personOne = document.getElementById("personOne");
var personTwo = document.getElementById("personTwo");
var personTwoFace = document.getElementById("personTwoFace");
var personTwoBody = document.getElementById("personTwoBody");
var personTwoLeftArm = document.getElementById("personTwoLeftArm");
var personTwoRightArm = document.getElementById("personTwoRightArm");
var personTwoLeftLeg = document.getElementById("personTwoLeftLeg");
var personTwoRightLeg = document.getElementById("personTwoRightLeg");
var clock = document.getElementById("clock");
var sky = document.getElementById("sky");
var ground = document.getElementById("ground");
var star = document.getElementById("star");
var accountMenu = document.getElementById("accountMenu");
var account = document.getElementById("account");
var registrationForm = document.getElementById("registrationForm");
var closeRegistrationForm = document.getElementById("closeRegistrationForm");
var register = document.getElementById("register");
var logInForm = document.getElementById("logInForm");
var closeLogInForm = document.getElementById("closeLogInForm");
var logIn = document.getElementById("logIn");
var avatarInput = document.getElementById("avatarInput");
var avatar = document.getElementById("avatar");

var space = "";

var virtualFriend = {
                        talk: function(text)
                              {
                                  return personOneTalk.innerHTML = text;
                              }

                    };

var you = {
              clearTextField: function()
                              {
                                  return personTwoSays.value = "";
                              },

              says: function()
                    {
                        return personTwoSays.value;
                    },

              firstName: localStorage.firstName,

              middleName: localStorage.middleName,

              lastName: localStorage.lastName,

              fullName: localStorage.fullName,

              age: localStorage.age

          };

var threeDimension = document.getElementById("threeDimension");

var greeting;

function updateClock()
{
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var AMOrPM;

    if(currentHours < 12)
    {
        AMOrPM = "AM";
    }

    else if(currentHours >= 12)
    {
        AMOrPM = "PM";
    }

    else
    {
        AMOrPM = "";
    }

    var currentHoursTwelveHourMode;

    if((currentHours >= 13) && (currentHours < 24))
    {
        currentHoursTwelveHourMode = currentHours - 12;
    }

    else if(currentHours == 0)
    {
        currentHoursTwelveHourMode = currentHours + 12;
    }

    else
    {
        currentHoursTwelveHourMode = currentHours;
    }

    var currentMinutesCorrectlyFormatted;

    if((currentMinutes >= 0) && (currentMinutes < 10))
    {
        currentMinutesCorrectlyFormatted = "0" + currentMinutes;
    }

    else
    {
        currentMinutesCorrectlyFormatted = currentMinutes;
    }

    clock.innerHTML = currentHoursTwelveHourMode + ":" + currentMinutesCorrectlyFormatted + " " + AMOrPM;

    var skyColor;
    var groundColor;
    var starType;
    var starShadow;

    if((currentHours >= 6) && (currentHours < 12))
    {
        skyColor = "rgb(0, 0, 255)";
        groundColor = "rgb(0, 255, 0)";
        starType = "yellow";
        starShadow = "yellow";
    }

    else if((currentHours == 5) && (currentMinutes >= 50))
    {
        skyColor = "pink";
        groundColor = "rgb(0, 255, 0)";
        starType = "light yellow";
    }

    else if((currentHours == 17) && (currentMinutes >= 50))
    {
        skyColor = "pink";
        groundColor = "rgb(0, 255, 0)";
        starType = "rgb(175, 0, 0)";
    }

    else if((currentHours >= 12) && (currentHours <= 17))
    {
        skyColor = "rgb(0, 0, 200)";
        groundColor = "rgb(0, 127, 0)";
        starType = "yellow";
        starShadow = "yellow";
    }

    else if((currentHours >= 18) && (currentHours < 24))
    {
        skyColor = "rgb(0, 0, 100)";
        groundColor = "rgb(0, 75, 0)";
        starType = "white";
        starShadow = "white";
    }

    else if((currentHours >= 0) && (currentHours <= 5))
    {
        skyColor = "rgb(0, 0, 100)";
        groundColor = "rgb(0, 75, 0)";
        starType = "white";
        starShadow = "white";
    }

    else
    {
        skyColor = "";
        groundColor = "";
        starType = "";
        starShadow = "";
    }

    sky.style.background = skyColor;
    ground.style.background = groundColor;
    star.style.background = starType;
    star.style.boxShadow = "0px 0px 20px 5px " + starShadow;

    if((currentHours >= 0) && (currentHours < 12))
    {
        greeting = "Good morning";
    }

    else if((currentHours >= 12) && (currentHours < 18))
    {
        greeting = "Good afternoon";
    }

    else if((currentHours >= 18) && (currentHours < 24))
    {
        greeting = "Good evening";
    }

    else
    {
        greeting = "Hello";
    }

};

updateClock();

setInterval(updateClock, 500);

function wordInFullSentance(word, fullSentance)
{
    return fullSentance.split(" ").some(function(findTheWord)
    {
        return findTheWord == word;
    });

};

function letterInFullSentance(letter, fullSentance)
{
    return fullSentance.split("").some(function(findTheLetter)
    {
        return findTheLetter == letter;
    });

};

function capitalize(word)
{
    return word.charAt(0).toUpperCase() + word.slice(1);
};

function nameSort(sentance)
{
    var start;

    if(wordInFullSentance("is", sentance))
    {
        start = sentance.search("is");

        localStorage.fullName = sentance.slice(start + 3);
    }

    else
    {
        localStorage.fullName = sentance;
    }

    if(letterInFullSentance(" ", localStorage.fullName))
    {
        start = localStorage.fullName.search(" ");
        space = " ";

        localStorage.firstName = capitalize(localStorage.fullName.slice(0, start));
        localStorage.lastName = capitalize(localStorage.fullName.slice(start + 1));
    }

    else
    {
        localStorage.firstName = capitalize(localStorage.fullName);
    }

    localStorage.fullName = localStorage.firstName + space + localStorage.lastName;

    you.firstName = localStorage.firstName;
    you.lastName = localStorage.lastName;
    you.fullName = localStorage.fullName;
};

virtualFriend.talk(greeting + "! What's your name?");

submitButton.onclick = function()
{
    nameSort(you.says());

    virtualFriend.talk("Hi, " + you.firstName + space + you.lastName + "! How are you doing?");
    you.clearTextField();
};