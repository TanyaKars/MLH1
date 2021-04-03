import sel from "../data/selectors";
import {age, gender, name, story} from "../data/testData";
import path from "path";

function inputValue4(name, gender, age, story){
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
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

function inputGenderAgeStory(gender, age, story){
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

function inputNameGenderStory(name, gender, story) {
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
}


function inputValue5Submit(name, gender, age, story, image) {
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();

    $(sel.submit).click();
}

function  imageUpload (){
    const fileUpload = $(sel.imageUpload);
    const image = $(sel.imageThumbnail);
    const filePath = path.join(__dirname, '../../data/photo/Ameliia2.jpg');
    const  remoteFilePath = browser.uploadFile(filePath);
    browser.execute(
        (el) => el.style.display = 'block',
        fileUpload
    );
    fileUpload.waitForDisplayed();
    fileUpload.setValue(remoteFilePath);
    expect(image).toBeExisting();
}

function allFieldsAreBlank(){
    $(sel.name).getText();

    let he = $$(sel.radioButtons)[gender.he].isSelected();
    expect(he).toEqual(false);
    let she = $$(sel.radioButtons)[gender.she].isSelected();
    expect(she).toEqual(false);
    let it = $$(sel.radioButtons)[gender.it].isSelected();
    expect(it).toEqual(false);
    $(sel.age).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
}

module.exports = {
    inputValue4,
    inputValue5Submit,
    inputNameAgeStory,
    inputValue4Submit,
    inputNameGenderStory,
    imageUpload,
    inputGenderAgeStory,
    allFieldsAreBlank
}
