import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import dat from "../../data/dataName";

describe('Positive test cases for the Name field', function () {

    before('Open App', function () {
        browser.url('');
    });
    beforeEach('refresh browser', function () {
        browser.refresh()
        browser.pause(2000)
    });


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