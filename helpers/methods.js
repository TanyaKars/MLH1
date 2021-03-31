import sel from "../data/selectors";
import {age, gender, name, story} from "../data/testData";

function inputValue4(name, gender, age, story){
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
}
 function inputNameAgeStory(name, age, story){
     $(sel.name).setValue(name);
     $(sel.age).setValue(age);
     $(sel.storyType).click();
     $$(sel.storyList)[story].click();
 }
 function inputValue4Submit(name, gender, age, story) {
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
    $(sel.submit).click();
 }

module.exports = inputValue4;
module.exports = inputNameAgeStory;
module.exports = inputValue4Submit;
