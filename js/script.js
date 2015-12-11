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

function personOneEyeContact()
{
    personOneFace.style.boxShadow = "-10px 2px 20px grey";
    personOneBody.style.boxShadow = "-10px 2px 20px grey";
    personOneLeftLeg.style.boxShadow = "-10px 2px 20px grey";
    personOneRightLeg.style.boxShadow = "-10px 2px 20px grey";
    personOneLeftArm.style.boxShadow = "-10px 2px 20px grey";
};

function personOneShakingHead()
{
    personOneFace.style.transform = "rotate(-30deg)";
    personOneFace.style.transform = "rotate(0deg)";
    personOneFace.style.transform = "rotate(30deg)";
    personOneFace.style.transform = "rotate(0deg)";
};

function personOneNodingHead()
{

};

function personOneNoEyeContact()
{
    personOneFace.style.boxShadow = "0px 0px 0px";
    personOneBody.style.boxShadow = "0px 0px 0px";
    personOneLeftLeg.style.boxShadow = "0px 0px 0px";
    personOneRightLeg.style.boxShadow = "0px 0px 0px";
    personOneLeftArm.style.boxShadow = "0px 0px 0px";
    personOneRightArm.style.boxShadow = "0px 0px 0px";
};

updateClock();

if(localStorage.getItem("firstName") == null)
{
    personOneTalk.innerHTML = greeting + "! What's your name?";
}

document.body.onload = setInterval("updateClock()", 1000);

account.onclick = function accountMenuToggle()
{
    accountMenu.style.display = "inline";

    account.onclick = function()
    {
        accountMenu.style.display = "none";

        account.onclick = function()
        {
            accountMenuToggle();
        };

    };

};

closeRegistrationForm.onclick = function()
{
    registrationForm.style.display = "none";
    closeRegistrationForm.style.display = "none";
};

register.onclick = function()
{
    registrationForm.style.display = "inline";
    closeRegistrationForm.style.display = "inline";

    avatar.style.backgroundImage = "url(" + avatarInput.value + ")";
};

closeLogInForm.onclick = function()
{
    logInForm.style.display = "none";
    closeLogInForm.style.display = "none";
};

logIn.onclick = function()
{
    logInForm.style.display = "inline";
    closeLogInForm.style.display = "inline";
};

var conversationPart = 0;

var submitButtonTwo = document.createElement("div");
submitButtonTwo.setAttribute("class", "submitButton");

var submitButtonTired = document.createElement("div");
submitButtonTired.setAttribute("class", "submitButton");

var submitButtonYourInterests = document.createElement("div");
submitButtonYourInterests.setAttribute("class", "submitButton");

var submitButtonRestartTopicCondition = document.createElement("div");
submitButtonRestartTopicCondition.setAttribute("class", "submitButton");

var submitButtonInterestsYouSilly = document.createElement("div");
submitButtonInterestsYouSilly.setAttribute("class", "submitButton");

var submitButtonInterests = document.createElement("div");
submitButtonInterests.setAttribute("class", "submitButton");

var submitButtonFour = document.createElement("div");
submitButtonFour.setAttribute("class", "submitButton");

var submitButtonThree = document.createElement("div");
submitButtonThree.setAttribute("class", "submitButton");

var submitButtonBored = document.createElement("div");
submitButtonBored.setAttribute("class", "submitButton");

var submitButtonMoveOn = document.createElement("div");
submitButtonMoveOn.setAttribute("class", "submitButton");

var submitButtonReallyMoveOn = document.createElement("div");
submitButtonReallyMoveOn.setAttribute("class", "submitButton");

var submitButtonYourStoredInterests = document.createElement("div");
submitButtonYourStoredInterests.setAttribute("class", "submitButton");

var submitButtonAnyInterests = document.createElement("div");
submitButtonAnyInterests.setAttribute("class", "submitButton");

var submitButtonInterestsAgain = document.createElement("div");
submitButtonInterestsAgain.setAttribute("class", "submitButton");

var submitButtonOnlyInterestConfirm = document.createElement("div");
submitButtonOnlyInterestConfirm.setAttribute("class", "submitButton");

var submitButtonRestartInterestCondition = document.createElement("div");
submitButtonRestartInterestCondition.setAttribute("class", "submitButton");

var submitButtonOtherInterests = document.createElement("div");
submitButtonOtherInterests.setAttribute("class", "submitButton");

var submitButtonOnlyInterestConfirmYesOrNo = document.createElement("div");
submitButtonOnlyInterestConfirmYesOrNo.setAttribute("class", "submitButton");

var submitButtonQuestions = document.createElement("div");
submitButtonQuestions.setAttribute("class", "submitButton");

var submitButtonNameRemembered = document.createElement("div");
submitButtonNameRemembered.setAttribute("class", "submitButton");

var yourInterests = [];
var otherInterestsOn = false;

personTwoSays.onkeypress = function(event)
{

    if(event.keyCode == 13 && conversationPart == 0)
    {
        submitButton.click();
    }

    else if(event.keyCode == 13 && conversationPart == 1)
    {
        submitButtonTwo.click();
    }

    else if(event.keyCode == 13 && conversationPart == 2)
    {
        submitButtonTired.click();
    }

    else if(event.keyCode == 13 && conversationPart == 3)
    {
        submitButtonYourInterests.click();
    }

    else if(event.keyCode == 13 && conversationPart == 4)
    {
        submitButtonRestartTopicCondition.click();
    }

    else if(event.keyCode == 13 && conversationPart == 5)
    {
        submitButtonInterestsYouSilly.click();
    }

    else if(event.keyCode == 13 && conversationPart == 6)
    {
        submitButtonInterests.click();
    }

    else if(event.keyCode == 13 && conversationPart == 7)
    {
        submitButtonFour.click();
    }

    else if(event.keyCode == 13 && conversationPart == 8)
    {
        submitButtonThree.click();
    }

    else if(event.keyCode == 13 && conversationPart == 9)
    {
        submitButtonBored.click();
    }

    else if(event.keyCode == 13 && conversationPart == 10)
    {
        submitButtonMoveOn.click();
    }

    else if(event.keyCode == 13 && conversationPart == 11)
    {
        submitButtonReallyMoveOn.click();
    }

    else if(event.keyCode == 13 && conversationPart == 12)
    {
        submitButtonYourStoredInterests.click();
    }

    else if(event.keyCode == 13 && conversationPart == 13)
    {
        submitButtonAnyInterests.click();
    }

    else if(event.keyCode == 13 && conversationPart == 14)
    {
        submitButtonInterestsAgain.click();
    }

    else if(event.keyCode == 13 && conversationPart == 15)
    {
        submitButtonOnlyInterestConfirm.click();
    }

    else if(event.keyCode == 13 && conversationPart == 16)
    {
        submitButtonRestartInterestCondition.click();
    }

    else if(event.keyCode == 13 && conversationPart == 17)
    {
        submitButtonOtherInterests.click();
    }

    else if(event.keyCode == 13 && conversationPart == 18)
    {
        submitButtonOnlyInterestConfirmYesOrNo.click();
    }

    else if(event.keyCode == 13 && conversationPart == 19)
    {
        submitButtonNameRemembered.click();
    }

    else if(event.keyCode == 13 && conversationPart == 20)
    {
        
    }

};

function keywordInFullSentance(keyword, fullSentance)
{
    return fullSentance.split(" ").some(function(findTheKeyword)
    {
        return findTheKeyword == keyword;
    });

};

function keyCharacterInFullSentance(keyCharacter, fullSentance)
{
    return fullSentance.split("").some(function(findTheKeyCharacter)
    {
        return findTheKeyCharacter == keyCharacter;
    });

};

function capitalize(word)
{
    return word.charAt(0).toUpperCase() + word.slice(1);
};

function multipleInterests(interests)
{

    if(keywordInFullSentance("is", interests))
    {
        var findInterestInFullSentance = interest.search("is");

        interests = interests.slice(findInterestInFullSentance + 3);
    }

    if(keyCharacterInFullSentance(",", interests) || keyCharacterInFullSentance(" ", interests) || keywordInFullSentance("and", interests))
    {
        var interestSeperator = interests.search(",");

        yourInterests.push(interests.slice(0, interestSeperator));
        yourInterests.push(interests.slice(interestSeperator + 2));
    }

    else
    {
        yourInterests.push(interests);
    }

    return yourInterests;
};

if(localStorage.getItem("firstName") !== null)
{
    conversationPart = 19;

    submitButton.style.display = "none";

    personOneTalk.innerHTML = greeting + ", " + localStorage.getItem("firstName") + localStorage.getItem("space") + localStorage.getItem("lastName") + "! How are you doing?";

    submitButtonNameRemembered.innerHTML = "Submit";
    personTwoTalk.appendChild(submitButtonNameRemembered);

    submitButtonNameRemembered.onclick = function()
    {
        submitButtonNameRemembered.style.display = "none";

        feeling();
    };

}

submitButton.onclick = function()
{
    conversationPart = 1;

    //Randomize second greeting
    var secondGreeting = ["How are you doing?", "How are you feeling?", "What's up?"];
    var randomString = Math.floor(Math.random() * secondGreeting.length);

    var name = personTwoSays.value.toLowerCase();
    var space;

    if(keywordInFullSentance("is", name))
    {
        var beforeName = name.search("is");

        name = name.slice(beforeName + 3);
    }

    if(keyCharacterInFullSentance(" ", name))
    {
        var nameSplit = name.search(" ");

        var firstName = name.slice(0, nameSplit);
        var lastName = name.slice(nameSplit + 1);
        space = " ";
    }

    else
    {
        var firstName = name;
        var lastName = "";
        space = "";
    }

    firstName = capitalize(firstName);
    lastName = capitalize(lastName);

    personOneTalk.innerHTML = "Hi, " + firstName + space + lastName + "! " + secondGreeting[randomString];

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("space", space);
    localStorage.setItem("lastName", lastName);

    submitButton.style.display = "none";
    personTwoSays.value = "";


    submitButtonTwo.innerHTML = "Submit";
    personTwoTalk.appendChild(submitButtonTwo);

    submitButtonTwo.onclick = function()
    {
        feeling();
    };

};

function feeling()
{
    var feeling;

    var personTwoReply = personTwoSays.value.toLowerCase();

    if(keywordInFullSentance("good", personTwoReply) || keywordInFullSentance("good!", personTwoReply) || keywordInFullSentance("good.", personTwoReply) || keywordInFullSentance("good,", personTwoReply) || keywordInFullSentance("awesome", personTwoReply) || keywordInFullSentance("awesome!", personTwoReply) || keywordInFullSentance("awesome.", personTwoReply) || keywordInFullSentance("awesome,", personTwoReply) || keywordInFullSentance("well", personTwoReply) || keywordInFullSentance("well!", personTwoReply) || keywordInFullSentance("well.", personTwoReply) || keywordInFullSentance("well,", personTwoReply) || keywordInFullSentance("ok", personTwoReply) || keywordInFullSentance("ok!", personTwoReply) || keywordInFullSentance("ok.", personTwoReply) || keywordInFullSentance("okay", personTwoReply) || keywordInFullSentance("okay!", personTwoReply) || keywordInFullSentance("okay.", personTwoReply))
    {
        var personOneReply = ["Nice to hear!", "I'm happy for you!"];
        var randomString = Math.floor(Math.random() * personOneReply.length);

        personOneTalk.innerHTML = personOneReply[randomString];

        if(keywordInFullSentance("you", personTwoReply) || keywordInFullSentance("you?", personTwoReply))
        {
            personOneTalk.innerHTML += " I'm feeling good too!";
        }

        if(localStorage.getItem("yourInterests") == null)
        {
            personOneTalk.innerHTML += " What are your interests?";
        }

        feeling = "good";
    }

    else if(keywordInFullSentance("horrible", personTwoReply) || keywordInFullSentance("horrible!", personTwoReply) || keywordInFullSentance("horrible.", personTwoReply) || keywordInFullSentance("horrible,", personTwoReply) || keywordInFullSentance("bad", personTwoReply) || keywordInFullSentance("bad!", personTwoReply) || keywordInFullSentance("bad.", personTwoReply) || keywordInFullSentance("bad,", personTwoReply))
    {
        var personOneReply = ["I'm sorry to hear that!", "Oh well!"];
        var randomString = Math.floor(Math.random() * personOneReply.length);

        personOneTalk.innerHTML = personOneReply[randomString];

        if(keywordInFullSentance("you", personTwoReply) || keywordInFullSentance("you?", personTwoReply))
        {
            personOneTalk.innerHTML += " I'm feeling good.";
        }

        if(localStorage.getItem("yourInterests") == null)
        {
            personOneTalk.innerHTML += " What are your interests?";
        }

        feeling = "bad";
    }

    else if(keywordInFullSentance("bored", personTwoReply) || keywordInFullSentance("bored!", personTwoReply) || keywordInFullSentance("bored.", personTwoReply) || keywordInFullSentance("bored,", personTwoReply))
    {
        var personOneReply = ["Why are you bored?", "Is everything okay?"];
        var randomString = Math.floor(Math.random() * personOneReply.length);

        personOneTalk.innerHTML = "";

        if(keywordInFullSentance("you", personTwoReply) || keywordInFullSentance("you?", personTwoReply))
        {
            personOneTalk.innerHTML = "I'm feeling good. ";
        }

        personOneTalk.innerHTML += personOneReply[randomString];

        feeling = "bored";
    }

    else if(keywordInFullSentance("tired", personTwoReply) || keywordInFullSentance("tired!", personTwoReply) || keywordInFullSentance("tired.", personTwoReply) || keywordInFullSentance("tired,", personTwoReply))
    {
        var personOneReply = ["Why are you tired?", "How many hours of sleep did you get last night?"];
        var randomString = Math.floor(Math.random() * personOneReply.length);

        personOneTalk.innerHTML = "";

        if(keywordInFullSentance("you", personTwoReply) || keywordInFullSentance("you?", personTwoReply))
        {
            personOneTalk.innerHTML = "I'm feeling good. ";
        }

        personOneTalk.innerHTML += personOneReply[randomString];

        feeling = "tired";
    }

    else
    {
        var personOneReply = ["Can you please repeat yourself?", "Again please?"];
        var randomString = Math.floor(Math.random() * personOneReply.length);

        personOneTalk.innerHTML = personOneReply[randomString];

        personTwoSays.value = "";
        }

    if(feeling == "tired")
    {
        conversationPart = 2;

        submitButtonTwo.style.display = "none";
        personTwoSays.value = "";

        submitButtonTired.innerHTML = "Submit";

        personTwoTalk.appendChild(submitButtonTired);

        submitButtonTired.onclick = function()
        {
            var tiredCondition;

            if(personOneTalk.innerHTML == "Why are you tired?")
            {
                tiredCondition = 1;

                tired();
            }

            else if(personOneTalk.innerHTML == "How many hours of sleep did you get last night?")
            {
                tiredCondition = 2;

                tired();
            }

            function tired()
            {
                var personTwoReply = personTwoSays.value.toLowerCase();

                if(tiredCondition == 1)
                {
                    conversationPart = 3;

                    personOneTalk.innerHTML = "I hope you have a better sleep tonight!";

                    if(localStorage.getItem("yourInterests") == null)
                    {
                        personOneTalk.innerHTML += "What are your interests?";
                    }

                    personTwoSays.value = "";
                    submitButtonTired.style.display = "none";

                    if(localStorage.getItem("yourInterests") !== null)
                    {
                        conversationStarter();
                    }

                    submitButtonYourInterests.innerHTML = "Submit";
                    personTwoTalk.appendChild(submitButtonYourInterests);

                    submitButtonYourInterests.onclick = function()
                    {
                        submitButtonYourInterests.style.display = "none";

                        interests();
                    };

                }

                else if(tiredCondition == 2)
                {
                    var normalSleep = 8;

                    if(keywordInFullSentance("zero", personTwoReply))
                    {
                        personTwoSays.value = 0;
                    }

                    else if(keywordInFullSentance("one", personTwoReply))
                    {
                        personTwoSays.value = 1;
                    }

                    else if(keywordInFullSentance("two", personTwoReply))
                    {
                        personTwoSays.value = 2;
                    }

                    else if(keywordInFullSentance("three", personTwoReply))
                    {
                        personTwoSays.value = 3;
                    }

                    else if(keywordInFullSentance("four", personTwoReply))
                    {
                        personTwoSays.value = 4;
                    }

                    else if(keywordInFullSentance("five", personTwoReply))
                    {
                        personTwoSays.value = 5;
                    }

                    else if(keywordInFullSentance("six", personTwoReply))
                    {
                        personTwoSays.value = 6;
                    }

                    else if(keywordInFullSentance("seven", personTwoReply))
                    {
                        personTwoSays.value = 7;
                    }

                    else if(keywordInFullSentance("eight", personTwoReply))
                    {
                        personTwoSays.value = 8;
                    }

                    else if(keywordInFullSentance("nine", personTwoReply))
                    {
                        personTwoSays.value = 9;
                    }

                    else if(keywordInFullSentance("ten", personTwoReply))
                    {
                        personTwoSays.value = 10;
                    }

                    if(parseInt(personTwoSays.value, 10) == normalSleep)
                    {
                        conversationPart = 5;

                        personOneTalk.innerHTML = personTwoSays.value + " hours of sleep is normal, so nice try!";

                        if(localStorage.getItem("yourInterests") == null)
                        {
                            personOneTalk.innerHTML += " What are your interests?";
                        }

                        personTwoSays.value = "";
                        submitButtonTired.style.display = "none";

                        if(localStorage.getItem("yourInterests") !== null)
                        {
                            conversationStarter();
                        }

                        submitButtonInterestsYouSilly.innerHTML = "Submit";
                        personTwoTalk.appendChild(submitButtonInterestsYouSilly);

                        submitButtonInterestsYouSilly.onclick = function()
                        {
                            submitButtonInterestsYouSilly.style.display = "none";

                            interests();
                        };

                    }

                    else if(parseInt(personTwoSays.value, 10) < normalSleep)
                    {
                        conversationPart = 6;

                        var hoursOfSleep = personTwoSays.value;
                        var extraSleepNeeded = normalSleep - parseInt(hoursOfSleep, 10);

                        personOneTalk.innerHTML = "Make sure to get " + extraSleepNeeded + " more hours of sleep tonight!";

                        if(localStorage.getItem("yourInterests") == null)
                        {
                            personOneTalk.innerHTML += " What are your interests?";
                        }

                        personTwoSays.value = "";
                        submitButtonTired.style.display = "none";

                        if(localStorage.getItem("yourInterests") !== null)
                        {
                            conversationStarter();
                        }

                        submitButtonInterests.innerHTML = "Submit";
                        personTwoTalk.appendChild(submitButtonInterests);

                        submitButtonInterests.onclick = function()
                        {
                            submitButtonInterests.style.display = "none";

                            interests();
                        };

                    }

                }

            };

        }

    }

    else if(feeling == "bored")
    {
        submitButtonTwo.style.display = "none";
        personTwoSays.value = "";

        submitButtonBored.innerHTML = "Submit";

        personTwoTalk.appendChild(submitButtonBored);

        var boredCondition;

        if(personOneTalk.innerHTML == "Why are you bored?")
        {
            boredCondition = 1;

            bored();
        }

        else if(personOneTalk.innerHTML == "Is everything okay?")
        {
            boredCondition = 2;

            bored();
        }

        function bored()
        {

            if(boredCondition == 1)
            {
                conversationPart = 9;

                submitButtonBored.onclick = function()
                {
                    conversationPart = 10;

                    personOneTalk.innerHTML = "Let's move on!";

                    if(localStorage.getItem("yourInterests") == null)
                    {
                        personOneTalk.innerHTML += " What are your interests?";
                    }

                    personTwoSays.value = "";
                    submitButtonBored.style.display = "none";

                    if(localStorage.getItem("yourInterests") !== null)
                    {
                        conversationStarter();
                    }

                    submitButtonMoveOn.innerHTML = "Submit";
                    personTwoTalk.appendChild(submitButtonMoveOn);

                    submitButtonMoveOn.onclick = function()
                    {
                        submitButtonMoveOn.style.display = "none";

                        interests();
                    };

                };

            }

            else if(boredCondition == 2)
            {
                conversationPart = 9;

                submitButtonBored.onclick = function()
                {
                    var personTwoReply = personTwoSays.value.toLowerCase();

                    if(personTwoReply == "yes")
                    {
                        conversationPart = 10;

                        personOneTalk.innerHTML = "Thank G-D!";

                        if(localStorage.getItem("yourInterests") == null)
                        {
                            personOneTalk.innerHTML += " What are your interests?";
                        }

                        personTwoSays.value = "";
                        submitButtonBored.style.display = "none";

                        if(localStorage.getItem("yourInterests") !== null)
                        {
                            conversationStarter();
                        }

                        submitButtonMoveOn.innerHTML = "Submit";
                        personTwoTalk.appendChild(submitButtonMoveOn);

                        submitButtonMoveOn.onclick = function()
                        {
                            submitButtonMoveOn.style.display = "none";

                            interests();
                        };

                    }

                    else if(personTwoReply == "no")
                    {
                        conversationPart = 10;

                        personOneTalk.innerHTML = "What's wrong?";

                        personTwoSays.value = "";
                        submitButtonBored.style.display = "none";

                        submitButtonMoveOn.innerHTML = "Submit";
                        personTwoTalk.appendChild(submitButtonMoveOn);

                        submitButtonMoveOn.onclick = function()
                        {
                            conversationPart = 11;

                            personOneTalk.innerHTML = "Just get over it!";

                            if(localStorage.getItem("yourInterests") == null)
                            {
                                personOneTalk.innerHTML += " What are your interests?";
                            }

                            personTwoSays.value = "";
                            submitButtonMoveOn.style.display = "none";

                            if(localStorage.getItem("yourInterests") !== null)
                            {
                                conversationStarter();
                            }

                            submitButtonReallyMoveOn.innerHTML = "Submit";
                            personTwoTalk.appendChild(submitButtonReallyMoveOn);

                            submitButtonReallyMoveOn.onclick = function()
                            {
                                submitButtonReallyMoveOn.style.display = "none";

                                interests();
                            };

                        };

                    }

                };

            }

        };

    }

    else if(feeling == "good" || feeling == "bad")
    {

        conversationPart = 8;

        submitButtonTwo.style.display = "none";
        personTwoSays.value = "";

        if(localStorage.getItem("yourInterests") !== null)
        {
            conversationStarter();
        }

        else
        {
            submitButtonThree.innerHTML = "Submit";

            personTwoTalk.appendChild(submitButtonThree);

            submitButtonThree.onclick = function()
            {
                submitButtonThree.style.display = "none";

                interests();
            };

        }

    }

    function interests()
    {
        conversationPart = 12;

        var personTwoReply = personTwoSays.value.toLowerCase();

        multipleInterests(personTwoReply);

        localStorage.setItem("yourInterests", yourInterests);

        if(yourInterests.length > 1)
        {
            personOneTalk.innerHTML = "Out of your " + yourInterests.length + " interests, which is your favorite?";

            personTwoSays.value = "";

            submitButtonYourStoredInterests.innerHTML = "Submit";
            personTwoTalk.appendChild(submitButtonYourStoredInterests);

            submitButtonYourStoredInterests.onclick = function()
            {
                var personTwoReply = personTwoSays.value.toLowerCase();

                submitButtonYourStoredInterests.style.display = "none";

                localStorage.setItem("favoriteInterest", personTwoReply);

                conversationStarter();
            };

        }

        else if(yourInterests.length == 1 && otherInterestsOn == false)
        {
            conversationPart = 15;

            personOneTalk.innerHTML = "Is " + yourInterests + " your only interest?";

            personTwoSays.value = "";

            submitButtonOnlyInterestConfirm.innerHTML = "Submit";
            personTwoTalk.appendChild(submitButtonOnlyInterestConfirm);

            submitButtonOnlyInterestConfirm.onclick = function interestConfirm()
            {
                submitButtonOnlyInterestConfirm.style.display = "none";
                var personTwoReply = personTwoSays.value.toLowerCase();

                if(keywordInFullSentance("yes", personTwoReply))
                {
                    personTwoSays.value = yourInterests;

                    localStorage.setItem("favoriteInterest", yourInterests);

                    conversationStarter();
                }

                else if(keywordInFullSentance("no", personTwoReply))
                {
                    conversationPart = 17;

                    personTwoSays.value = "";

                    personOneTalk.innerHTML = "Then what other interests do you have?";

                    submitButtonOtherInterests.innerHTML = "Submit";
                    personTwoTalk.appendChild(submitButtonOtherInterests);

                    submitButtonOtherInterests.onclick = function()
                    {
                        submitButtonOtherInterests.style.display = "none";

                        otherInterestsOn = true;

                        interests();
                    };

                }

                else
                {
                    conversationPart = 18;

                    personTwoSays.value = "";

                    personOneTalk.innerHTML = "Either yes or no.";

                    submitButtonOnlyInterestConfirmYesOrNo.innerHTML = "Submit";
                    personTwoTalk.appendChild(submitButtonOnlyInterestConfirmYesOrNo);

                    submitButtonOnlyInterestConfirmYesOrNo.style.display = "inline";

                    submitButtonOnlyInterestConfirmYesOrNo.onclick = function()
                    {
                        submitButtonOnlyInterestConfirmYesOrNo.style.display = "none";

                        interestConfirm();
                    };

                }

            };

        }

        else
        {
            conversationPart = 16;

            personTwoSays.value = "";

            personOneTalk.innerHTML = "Please pick a topic that I know of";

            submitButtonRestartInterestCondition.innerHTML = "Submit";
            personTwoTalk.appendChild(submitButtonRestartInterestCondition);

            submitButtonRestartInterestCondition.style.display = "inline";

            submitButtonRestartInterestCondition.onclick = function()
            {
                submitButtonRestartInterestCondition.style.display = "none";

                interests();
            };

        }

    };

    function conversationStarter()
    {
        conversationPart = 20;

        //Todo: Make a small delay

        personOneTalk.innerHTML = " I know that your favorite interest is " + localStorage.getItem("favoriteInterest") + ". Can you please tell me the latest stuff you know of in " + localStorage.getItem("favoriteInterest") + "?";

    };

};