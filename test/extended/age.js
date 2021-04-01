import sel from '../../data/selectors';
import {age, gender, name, story} from '../../data/testData';
import {inputNameGenderStory} from "../../helpers/methods";
import exp from "../../data/expected.json";

describe('Age field suit ', function () {
    before('Open App', function () {
        browser.url('');
    });

    beforeEach('refresh browser', function () {
        browser.refresh();
    });

    describe('Positive test cases for the age field', function () {

        it('TC-060 Age field placeholder = "Hero\'s age', function () {
            let agePlaceHolder = $(sel.agePlaceholder).getAttribute('placeholder');
            expect(agePlaceHolder).toEqual(exp.agePHolder)
        });

        it('TC-061 Age field accepts at least one digit (not below digit "1")', function () {
            $(sel.age).setValue(age.oneDigit)
            let error = $(sel.errorAge).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-062 Age field accepts up to 12 digits', function () {
            $(sel.age).setValue(age.twelveDigits)
            let error = $(sel.errorAge).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-063 Age field accepts any digits', function () {
            $(sel.age).setValue(age.anyDigits)
            let error = $(sel.errorAge).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-064 Age field accepts "0" on the left side', function () {
            $(sel.age).setValue(age.zeroInTheLeft)
            $(sel.outsideOfAnyField).click()
            let value = $(sel.age).getAttribute("value");
            expect(value).toEqual(exp.trimmed0);
        });

        it('TC-065 Age field accepts digits with spaces', function () {
            $(sel.age).setValue(age.digitWithSpaces)
            let value = $(sel.age).getAttribute("value");
            expect(value).toEqual(exp.trimmedSpaces);
        });

        it('TC-066 Age field: spin up & down functionality available', function () {
            $(sel.age).click();
            let spin = $(sel.spinFunctionality).isEnabled();
            expect(spin).toEqual(true);
        });

        it('TC-067 Age field\'s spin turns up (0 -> 1)', function () {
            $(sel.age).click();
            $(sel.spinUp).click();
            let value = $(sel.age).getValue();
            expect(value).toEqual(exp.one);
        });

        it('TC-068 Age field\'s spin turns up (1 -> 2)', function () {
            $(sel.age).setValue(age.oneDigit)
            $(sel.spinUp).click();
            let value = $(sel.age).getValue();
            expect(value).toEqual(exp.two);
        });

        it('TC-069 Age field\'s spin turns down (2 -> 1)', function () {
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

        beforeEach('refresh browser', function () {
            browser.refresh();
            browser.pause(500)
        });

        it('TC-075 Empty Age field)', function () {
            $(sel.age).setValue(age.oneDigit);
            $(sel.age).keys(['Backspace']);
            let error = $(sel.errorAge).isDisplayed();
            expect(error).toEqual(true);
        });

        it('TC-076 Age field contains one digit: "0")', function () {
            $(sel.age).setValue(age.zero);
            let error = $(sel.errorAge).isDisplayed();
            expect(error).toEqual(true);
        });

        it('TC-077 Age field contains more than 12 digits)', function () {
            $(sel.age).setValue(age.thirteenDigits);
            let error = $(sel.errorAge).isDisplayed();
            expect(error).toEqual(true);
        });

        it('TC-078 Age field contains letters)', function () {
            $(sel.age).setValue(name.default);
            let error = $(sel.errorAge).isDisplayed();
            expect(error).toEqual(true);
        });

        it('TC-079 Age field contains symbols)', function () {
            $(sel.age).setValue(name.allSymbols);
            let error = $(sel.errorAge).isDisplayed();
            expect(error).toEqual(true);
        });

        it('TC-080 Age field contains negative digits)', function () {
            $(sel.age).setValue(age.negativeDigit);
            let error = $(sel.errorAge).isDisplayed();
            expect(error).toEqual(true);
        });

        it('TC-081 Age field contains negative digits)', function () {
            $(sel.age).setValue(age.floatNumber);
            let error = $(sel.errorAge).isDisplayed();
            expect(error).toEqual(true);
        });

        it('TC-082 Age field contains Russian letters)', function () {
            $(sel.age).setValue(age.rusLetters);
            let error = $(sel.errorAge).isDisplayed();
            expect(error).toEqual(true);
        });

        // it('TC-083 Age field doesn\'t accept emojis)', function () {
        //     $(sel.age).setValue(age.rusLetters);
        //     let error = $(sel.errorAge).isDisplayed();
        //     expect(error).toEqual(true);
        // });

        // it('TC-084 Age field contains SQL/XML code injections)', function () {
        //     $(sel.age).setValue(age.rusLetters);
        //     let error = $(sel.errorAge).isDisplayed();
        //     expect(error).toEqual(true);
        // });

        it('TC-085 Age field\'s spin down from one digit: "1")', function () {
            $(sel.age).setValue(age.oneDigit)
            $(sel.spinDown).click();
            let error = $(sel.errorAge).isDisplayed();
            expect(error).toEqual(true);
        });

        it('TC-086 Age field\'s spin up after 12 digit\'s number)', function () {
            $(sel.age).setValue(age.thirteenDigits);
            $(sel.spinUp).click();
            let error = $(sel.errorAge).isDisplayed();
            expect(error).toEqual(true);
        });

        it.only('TC-198 Empty Age field (Submit button is disabled))', function () {

            inputNameGenderStory(name.default, gender.she, story.comedy)
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });

    });
});