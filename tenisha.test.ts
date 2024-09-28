import { soloProject } from "./tenishaPage";
const lc= new soloProject();
const fs = require('fs');

test('test1', async () => {
    await lc.navigate();
    await lc.click(lc.eyeglasses);
    await lc.click(lc.sunglasses);
    await lc.click(lc.contacts);
    await lc.click(lc.lenses);
    await lc.click(lc.brands);
    await lc.click(lc.eyeExam);
    await lc.driver.sleep(2000)
    await lc.click(lc.sync);

    await lc.driver.quit()
});

test('test2', async () => {
    
});