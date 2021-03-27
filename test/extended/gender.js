import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import * as wrapper from "rxjs/operators";

describe('Positive test cases for the gender radiobutton', function () {

    before('Open App', function () {
        browser.url('');
    });

    // it('TC-047 Button HE is enabled', function () {
    //     $$(sel.genderButton)[0].click();
    //     let genderHeBtn = $$(sel.genderButton)[0].isSelected();
    //     expect(genderHeBtn).toEqual(true);
    // });

    // it('TC-059 NEGATIVE Not chosen button / Required', function () {
    //     $(sel.name).setValue("SuperGirl(*|*)")
    //     $(sel.age).setValue("1234567890");
    //     $(sel.storyType).click();
    //     $$(sel.storyList)[6].click();
    //     let submitBtn = $(sel.submit).isEnabled();
    //     expect(submitBtn).toEqual(false);
    // });
    it('TC-047 Button 1 is enabled', function () {
        $(sel.name).setValue("SuperGirl(*|*)")
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue("1234567890");
        let he = $$(sel.radioButtons)[1].isSelected();
        expect(he).toEqual(true);
    });
});
