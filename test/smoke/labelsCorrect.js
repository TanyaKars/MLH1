import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('Labels are correct', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-015 Header = My Little Hero', function () {
        let header = $(sel.header).getText();
        expect(header).toEqual(exp.header);
    });

    it('TC-016 Instruction is Let\'s create your own HERO! It\'s super easy with our application!', function () {
        let instruction = $(sel.instruction).getText();
        expect(instruction).toEqual(exp.instruction);
    });

    it('TC-0017 Name label 1. What is your Hero\'s name?', function () {
        let name = $$(sel.requiredLabel)[0].getText();
        expect(name).toEqual(exp.nameLabel);
    });

    it('TC-0018 Gender field label is  2. Please choose a gender.', function () {
        let gender = $$(sel.requiredLabel)[1].getText();
        expect(gender).toEqual(exp.genderLabel);
    });

    it('TC-019 Gender radio button 1 label = he', function () {
        let buttonHe = $$(sel.radioButtonsLabels)[0].getText();
        expect(buttonHe).toEqual(exp.genderHe);
    });

    it('TC-020 Gender radio button 1 label = she', function () {
        let buttonShe = $$(sel.radioButtonsLabels)[1].getText();
        expect(buttonShe).toEqual(exp.genderShe);
    });

    it('TC-021 Gender radio button 1 label = it', function () {
        let buttonIt = $$(sel.radioButtonsLabels)[2].getText();
        expect(buttonIt).toEqual(exp.genderIt);
    });

    it('TC-022 Age label = 3. How old is your Hero?', function () {
        let ageLabel = $$(sel.requiredLabel)[2].getText();
        expect(ageLabel).toEqual(exp.ageLabel);
    });

    it('TC-023 Story Type label = 4. What type of story would you like to read?', function () {
        let storyTypeLabel = $$(sel.requiredLabel)[3].getText();
        expect(storyTypeLabel).toEqual(exp.storyTypeLabel);
    });

    it('TC-024 Image label = 5. Upload an image (optional)', function () {
        let label = $$(sel.imageLabel)[4].getText();
        expect(label).toEqual(exp.imageLabel);
    });

    it('TC-025 Submit label button  = Create!', function () {
        let age = $(sel.submit).getText();
        expect(age).toEqual(exp.submitButtonLabel);
    });
});