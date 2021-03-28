import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import data, {age, gender, name, story} from '../../data/testData';
import inputValues4 from "../../helpers/methods";


describe('Positive test cases for the Name field', function () {

    before('Open App', function () {
        browser.url('');
    });
    beforeEach('refresh browser', function () {
        browser.refresh()
    });


    it('TC-028 Name Field placeholder = "Hero\'s name"', function () {
        let namePlaceHolder = $(sel.namePlaceholder).getAttribute('placeholder');
        expect(namePlaceHolder).toEqual(exp.namePHolder)
    });

    it('TC-029 Name field accept one symbol', function () {
        $(sel.name).setValue(name.oneSymbol)
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(false);
    });

    it('TC-030 Name field accept 70 symbols', function () {
        $(sel.name).setValue(name.symbols70)
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(false);
    });

    it('TC-031 Name field accept letters', function () {
        $(sel.name).setValue(name.allLetters)
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(false);
    });

    it('TC-032 Name field accept Upper case', function () {
        $(sel.name).setValue(name.allCapital)
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(false);
    });

    it('TC-033 Name field accept Lower case', function () {
        $(sel.name).setValue(name.allLower)
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(false);
    });

    it('TC-034 Name field accept digits', function () {
        $(sel.name).setValue(name.allNumbers)
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(false);
    });

    it('TC-035 Name field accept special symbols', function () {
        $(sel.name).setValue(name.allSymbols)
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(false);
    });

    it('TC-036 Name field accept letters with space', function () {
        $(sel.name).setValue(name.lettersWithSpaces)
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(false);
    });

    it('TC-037 Name field accept russian letters', function () {
        $(sel.name).setValue(name.russianLetters)
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(false);
    });

    // it('TC-038 Name field accepts emoji', function () {
    //     $(sel.name).setValue(name.emoji)
    // let alert = $(sel.nameAlert).isDisplayed();
    // expect(alert).toEqual(false);
    // });
});

    describe('Negative test cases for the name field', function () {

    it('TC-040 Name field do not accept SQL/XML code injections', function () {
        $(sel.name).setValue(name.code)
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(false);
    });

    it('TC-041 Name field do not accept Empty name field', function () {
        $(sel.name).click();
        $(sel.outsideOfAnyField).click();
        let alert = $(sel.error).isDisplayed();
        expect(alert).toEqual(true);
    });

    it('TC-042 Name field do not accept 71 symbols', function () {
        $(sel.name).setValue(name.symbols71)
        browser.isAlertOpen()
    });

    it('TC-044 User left Name input field blank', function () {
        inputValues4(gender.she, age.default, story.comedy);
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(false);
    });

    it('TC-045 Name field do not accept spaces only', function () {
        $(sel.name).setValue(name.allSpaces)
        browser.isAlertOpen()
    });

    it('TC-046 Name field do not accept spaces only (Submit button disabled)', function () {
       inputValues4(name.allSpaces, gender.she, age.default, story.comedy)
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(false);
    });

});