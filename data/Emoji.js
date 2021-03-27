

async;
sendKeysWithEmojis(element, text);
{
    const script = `var elm = arguments[0],
        txt = arguments[1];elm.value += txt;
        elm.dispatchEvent(new Event('keydown', {bubbles: true}));
        elm.dispatchEvent(new Event('keypress', {bubbles: true}));
        elm.dispatchEvent(new Event('input', {bubbles: true}));
        elm.dispatchEvent(new Event('keyup', {bubbles: true}));`;
    await this.driver.executeScript(script, element, text);
}

const element = await this.driver.findElement(selector);
await sendKeysWithEmojis(element, '🚀😀 This one shall pass 🚀😀');