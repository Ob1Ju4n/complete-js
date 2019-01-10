//var strObject = "[{section:'advisories', description:'This is the advisories section'}, {section:'news', description:'This is the news section'}]";
/*
var overlayObject = [{
    section: "advisories",
    description: "This is the advisories section"
}, {
    section: "news",
    description: "This is the news section"
}];

console.log(JSON.stringify(overlayObject));
*/

/*var preferencesObject = {
    language: "EN",
    timeZone: "EST",
    showHubLandingOverlay: false,
    showHubToolsOverlay: true
};

console.log(JSON.stringify(preferencesObject));*/

/*var strObject = "invlid:1";

try {
    console.log(JSON.parse(strObject));
} catch (e) {
    if (e instanceof SyntaxError) {
        console.log("Syntax Error");
    }
}*/
var overlayObject = [
    {
        title: "Welcome to the New Hub!",
        content: (
        "<div>" +
        "<p>With a lot of hard work and a little pixie dust, we are happy to introduce this next version to you. </p>" +
        "<span>Let's get started.</span>" +
        "</div>")
    },
    {
        type: "element",
        title: "Your Profile",
        content:(
        "<div>" +
        "<p>You know all that special stuff about you - like your official contact and organization information? Quickly view it right here.</p>" +
        "<span>Oh! You can sign out here too.</span>" +
        "</div>"),
        selector: "header .kng-header",
        placement: 'bottom',
        scroll: true
    },
    {
        type: "element",
        title: "Search",
        content: "Smarter and simpler, you can find what you need without a magic wand. Search People, News, Events, Offers, Guest Services, plus more in one spot.",
        selector: ".form-group.kng-search-input.hub-search",
        placement: 'bottom',
        scroll: true
    },
    {
        type: "element",
        title: "Tools",
        content: "Make yourself at home. Add your favorite tools and personal bookmarks so each visit will be quick and easy.",
        selector: ".hub-tools-module",
        placement: 'top',
        scroll: true
    },
    {
        type: "element",
        title: "Schedule Card",
        content: "Hi ho, hi oh, it's off to work we go! Get a glimpse your next 3 days right here.",
        selector: ".hub-schedule-module",
        placement: 'top',
        scroll: true
    }
];

console.log(JSON.stringify(overlayObject));