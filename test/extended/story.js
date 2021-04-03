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

    it('TC-088 Story type placeholder = "Type of the story"', function () {
        let storyPlaceHolder = $(sel.storyPlaceholder).getText();
        expect(storyPlaceHolder).toEqual(exp.storyPlaceholder)
    });

    it('TC-089 The first type of the story = "Overcoming the Monster"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.overcomingTheMonster].click();
        let story1 = $$(sel.storyList)[story.overcomingTheMonster].getAttribute("title");
        expect(story1).toEqual(exp.storyOne);
    });

    it('TC-090 The field is a dropdown', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.overcomingTheMonster].click();
        let story1 = $$(sel.storyList)[story.overcomingTheMonster].getAttribute("title");
        expect(story1).toEqual(exp.storyOne);
    });


});
