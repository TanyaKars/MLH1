import sel from '../../data/selectors';
import data, {age, gender, name, story} from '../../data/testData';
import inputNameAgeStory from "../../helpers/methods";
describe('Positive test cases for the gender radiobutton', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach('refresh browser', function() {
        browser.refresh();
    });

    it('TC-047 Button HE is enabled', function () {
        $$(sel.radioButtons)[gender.he].click();
        let genderHeBtn = $$(sel.radioSelected)[gender.he].isSelected();
        expect(genderHeBtn).toEqual(true);
    });

    it('TC-048 Button SHE is enabled', function () {
        $$(sel.radioButtons)[gender.she].click();
        let genderSheBtn = $$(sel.radioSelected)[gender.she].isSelected();
        expect(genderSheBtn).toEqual(true);
    });

    it('TC-049 Button IT is enabled', function () {
        $$(sel.radioButtons)[gender.it].click();
        let genderItBtn = $$(sel.radioSelected)[gender.it].isSelected();
        expect(genderItBtn).toEqual(true);
    });

    it('TC-050a User can use only one button at the time: he', function () {
        $$(sel.radioButtons)[gender.he].click();
        let genderSheBtn = $$(sel.radioSelected)[gender.she].isSelected();
        expect(genderSheBtn).toEqual(false);
    });

    it('TC-050b User can use only one button at the time: he', function () {
        $$(sel.radioButtons)[gender.he].click();
        let genderItBtn = $$(sel.radioSelected)[gender.it].isSelected();
        expect(genderItBtn).toEqual(false);
    });

    it('TC-051a User can use only one button at the time: she', function () {
        $$(sel.radioButtons)[gender.she].click();
        let genderHeBtn = $$(sel.radioSelected)[gender.he].isSelected();
        expect(genderHeBtn).toEqual(false);
    });

    it('TC-051b User can use only one button at the time: she', function () {
        $$(sel.radioButtons)[gender.she].click();
        let genderItBtn = $$(sel.radioSelected)[gender.it].isSelected();
        expect(genderItBtn).toEqual(false);
    });

    it('TC-052a User can use only one button at the time: it', function () {
        $$(sel.radioButtons)[gender.it].click();
        let genderHeBtn = $$(sel.radioSelected)[gender.he].isSelected();
        expect(genderHeBtn).toEqual(false);
    });

    it('TC-052b User can use only one button at the time: it', function () {
        $$(sel.radioButtons)[gender.it].click();
        let genderSheBtn = $$(sel.radioSelected)[gender.she].isSelected();
        expect(genderSheBtn).toEqual(false);
    });

    it('TC-053 User can switch the option: he -> she', function () {
        $$(sel.radioButtons)[gender.he].click();
        $$(sel.radioButtons)[gender.she].click();
        let genderSheBtn = $$(sel.radioSelected)[gender.she].isSelected();
        expect(genderSheBtn).toEqual(true);
    });

    it('TC-054 User can switch the option: he -> it', function () {
        $$(sel.radioButtons)[gender.he].click();
        $$(sel.radioButtons)[gender.it].click();
        let genderHeBtn = $$(sel.radioSelected)[gender.it].isSelected();
        expect(genderHeBtn).toEqual(true);
    });

    it('TC-055 User can switch the option: she -> he', function () {
        $$(sel.radioButtons)[gender.she].click();
        $$(sel.radioButtons)[gender.he].click();
        let genderHeBtn = $$(sel.radioSelected)[gender.he].isSelected();
        expect(genderHeBtn).toEqual(true);
    });

    it('TC-056 User can switch the option: she -> it', function () {
        $$(sel.radioButtons)[gender.she].click();
        $$(sel.radioButtons)[gender.it].click();
        let genderHeBtn = $$(sel.radioSelected)[gender.it].isSelected();
        expect(genderHeBtn).toEqual(true);
    });

    it('TC-057 User can switch the option: it -> she', function () {
        $$(sel.radioButtons)[gender.it].click();
        $$(sel.radioButtons)[gender.she].click();
        let genderHeBtn = $$(sel.radioSelected)[gender.she].isSelected();
        expect(genderHeBtn).toEqual(true);
    });

    it('TC-058 User can switch the option: it -> he', function () {
        $$(sel.radioButtons)[gender.it].click();
        $$(sel.radioButtons)[gender.he].click();
        let genderHeBtn = $$(sel.radioSelected)[gender.he].isSelected();
        expect(genderHeBtn).toEqual(true);
    });
});

describe('Negative test cases for the gender radiobutton', function () {

    beforeEach('refresh browser', function(){
        browser.refresh();
    });

    it('TC-059  Not chosen button / Required', function () {
        inputNameAgeStory(name.default, age.default, story.comedy);
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(false);
    });
});

