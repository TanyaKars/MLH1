import sel from '../../data/selectors';
import data, {age, gender, name, story} from '../../data/testData';
import inputNameAgeStory from "../../helpers/methods";
import exp from "../../data/expected.json";


describe('Positive test cases for the age field', function () {
    before('Open App', function () {
        browser.url('');
    });

    beforeEach('refresh browser', function() {
        browser.refresh();
    });

    it('TC-060 Age field placeholder = "Hero\'s age', function (){
        let agePlaceHolder = $(sel.agePlaceholder).getAttribute('placeholder');
        expect(agePlaceHolder).toEqual(exp.agePHolder)
    });

    it('TC-061 Age field accepts at least one digit (not below digit "1")', function (){
        $(sel.age).setValue(age.oneDigit)
        let error = $(sel.errorAge).isDisplayed();
        expect(error).toEqual(false);
    });

    it('TC-062 Age field accepts up to 12 digits', function (){
        $(sel.age).setValue(age.twelveDigits)
        let error = $(sel.errorAge).isDisplayed();
        expect(error).toEqual(false);
    });

    it('TC-063 Age field accepts any digits', function (){
        $(sel.age).setValue(age.anyDigits)
        let error = $(sel.errorAge).isDisplayed();
        expect(error).toEqual(false);
    });

    it('TC-064 Age field accepts "0" on the left side', function (){
        $(sel.age).setValue(age.zeroInTheLeft)
        $(sel.outsideOfAnyField).click()
        let value = $(sel.age).getAttribute("value");
        expect(value).toEqual(exp.trimmed0);
    });

    it('TC-065 Age field accepts digits with spaces', function (){
        $(sel.age).setValue(age.digitWithSpaces)
        let value = $(sel.age).getAttribute("value");
        expect(value).toEqual(exp.trimmedSpaces);
    });

    it('TC-066 Age field: spin up & down functionality available', function (){
        $(sel.age).click();
        let spin = $(sel.spinFunctionality).isEnabled();
        expect(spin).toEqual(true);
    });

    it('TC-067 Age field\'s spin turns up (0 -> 1)', function (){
        $(sel.age).click();
        $(sel.spinUp).click();
        let value = $(sel.age).getValue();
        expect(value).toEqual(exp.one);
    });

    it('TC-068 Age field\'s spin turns up (1 -> 2)', function (){
        $(sel.age).setValue(age.oneDigit)
        $(sel.spinUp).click();
        let value = $(sel.age).getValue();
        expect(value).toEqual(exp.two);
    });

    it('TC-069 Age field\'s spin turns down (2 -> 1)', function (){
        $(sel.age).setValue(age.digit2)
        $(sel.spinDown).click();
        let value = $(sel.age).getValue();
        expect(value).toEqual(exp.one);
    });

    // it('TC-073 Age field accepts copy/paste functionality', function (){
    //     $(sel.age).setValue(age.digitWithSpaces)
    //     let error = $(sel.errorAge).isDisplayed();
    //     expect(error).toEqual(false);
    // });

});

describe('Negative test cases for the age field', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach('refresh browser', function() {
        browser.refresh();
        browser.pause(500)
    });


});