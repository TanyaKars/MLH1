import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender,age} from '../../data/testData'
import dat from "../../data/dataName";


describe('Positive test cases for the Name field', function () {

    before('Open App', function () {
        browser.url('');
    });
    beforeEach('refresh browser', function (){
        browser.refresh()
    });


    it('TC-028 Name Field placeholder = "Hero\'s name"', function () {
        let namePlaceHolder = $(sel.namePlaceholder).getAttribute('placeholder');
        expect(namePlaceHolder).toEqual(exp.namePHolder)
    });

    it('TC-029a Name field accept one symbol', function () {
        $(sel.name).setValue(dat.oneSymbol)
        let text = $(sel.name).getAttribute("value");
        expect(text).toEqual(dat.oneSymbol);
    });

    it('TC-029b Name field accept one symbol', function () {
        $(sel.name).setValue(dat.oneSymbol)
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(false);
    });

    it('TC-030a Name field accept 70 symbols', function () {
        $(sel.name).setValue(dat.symbols70)
        let text = $(sel.name).getAttribute("value");
        expect(text).toEqual(dat.symbols70);
    });

    it('TC-030b Name field accept 70 symbols', function () {
        $(sel.name).setValue(dat.symbols70)
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(false);
    });

    it('TC-031a Name field accept letters', function () {
        $(sel.name).setValue(dat.allLetters)
        let text = $(sel.name).getAttribute("value");
        expect(text).toEqual(dat.allLetters);
    });

    it('TC-031b Name field accept letters', function () {
        $(sel.name).setValue(dat.allLetters)
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(false);
    });

    it('TC-032a Name field accept Upper case', function () {
        $(sel.name).setValue(dat.allCapital)
        let text = $(sel.name).getAttribute("value");
        expect(text).toEqual(dat.allCapital);
    });

    it('TC-032b Name field accept Upper case', function () {
        $(sel.name).setValue(dat.allCapital)
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(false);
    });

    it('TC-033a Name field accept Lower case', function () {
        $(sel.name).setValue(dat.allLower)
        let text = $(sel.name).getAttribute("value");
        expect(text).toEqual(dat.allLower);
    });

    it('TC-033b Name field accept Lower case', function () {
        $(sel.name).setValue(dat.allLower)
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(false);
    });

    it('TC-034a Name field accept digits', function () {
        $(sel.name).setValue(dat.allNumbers)
        let text = $(sel.name).getAttribute("value");
        expect(text).toEqual(dat.allNumbers);
    });

    it('TC-034b Name field accept digits', function () {
        $(sel.name).setValue(dat.allNumbers)
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(false);
    });

    it('TC-035a Name field accept special symbols', function () {
        $(sel.name).setValue(dat.allSymbols)
        let text = $(sel.name).getAttribute("value");
        expect(text).toEqual(dat.allSymbols);
    });

    it('TC-035b Name field accept special symbols', function () {
        $(sel.name).setValue(dat.allSymbols)
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(false);
    });

    it('TC-036a Name field accept letters with space', function () {
        $(sel.name).setValue(dat.lettersWithSpaces)
        let text = $(sel.name).getAttribute("value");
        expect(text).toEqual(dat.lettersWithSpaces);
    });

    it('TC-036b Name field accept letters with space', function () {
        $(sel.name).setValue(dat.lettersWithSpaces)
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(false);
    });

    it('TC-037a Name field accept russian letters', function () {
        $(sel.name).setValue(dat.russianLetters)
        let text = $(sel.name).getAttribute("value");
        expect(text).toEqual(dat.russianLetters);
    });

    it('TC-037b Name field accept russian letters', function () {
        $(sel.name).setValue(dat.russianLetters)
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(false);
    });

    // it('TC-038a Name field accepts emoji', function () {
    //     $(sel.name).setValue(dat.emoji)
    //     let text = $(sel.name).getAttribute("value");
    //     expect(text).toEqual(dat.emoji);
    // });

    // it('TC-038b Name field accepts emoji', function () {
    //     $(sel.name).setValue(dat.emoji)
    // let alert = $(sel.nameAlert).isDisplayed();
    // expect(alert).toEqual(false);
    // });


    it('TC-040a Name field do not accept SQL/XML code injections', function () {
        $(sel.name).setValue(dat.code)
        let text = $(sel.name).getAttribute("value");
        expect(text).toEqual(dat.code);
    });

    it('TC-040b Name field do not accept SQL/XML code injections', function () {
        $(sel.name).setValue(dat.code)
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(false);
    });

    it('TC-040c Name field do not accept SQL/XML code injections', function () {
        $(sel.name).setValue(dat.code)
        let text = $(sel.name).getText();
        expect(text).toEqual(dat.code);
    });

    it('TC-041 Name field do not accept Empty name field', function () {
        $(sel.name).click();
        $(sel.outsideOfAnyField).click();
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(true);
    });

    it('TC-042 Name field do not accept 71 symbols', function () {
        $(sel.name).setValue(dat.symbols71)
        expect(alert).toEqual(true);
        // browser.isAlertOpen()
    });

    it('TC-044 User left Name input field blank', function () {
        $(sel.name).setValue("")
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue("1234567890");
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(false);
    });

    it('TC-045 Name field do not accept spaces only', function () {
        $(sel.name).setValue("    ")
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue("1234567890");
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        let alert = $(sel.nameAlert).isDisplayed();
        expect(alert).toEqual(true);
    });

    it('TC-046 Name field do not accept spaces only (Submit button disabled)', function () {
        $(sel.name).setValue("   ")
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue("1234567890");
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(false);
    });

});