import sel from '../../data/selectors';
import {name, gender,age, story, generatedStory, imagePath} from '../../data/testData';
import exp from '../../data/expected.json';
import {inputValue4, imageUpload} from '../../helpers/methods';
import * as path from "path";


describe('Positive test cases for the submit button', function () {
    before('Open App', function () {
        browser.url('');
    });

    beforeEach('refresh browser', function() {
        browser.refresh();
    });

    it('TC-147 Image field placeholder = "Click or drag and drop"', function (){

    });

    it('TC-148 Click works for .jpeg files', function (){
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
    });

    it('TC-149 Click works for .jpeg files', function (){
        imageUpload(imagePath.test)
        const image = $(sel.imageThumbnail);
        expect(image).toBeExisting();
    });



});