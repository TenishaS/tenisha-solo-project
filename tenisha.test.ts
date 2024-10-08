import { soloProject } from "./tenishaPage";
const lc= new soloProject();
const fs = require('fs');

test('test1', async () => {
    await lc.navigate();
    await lc.click(lc.eyeglasses);
    //await lc.click(lc.sunglasses);
    await lc.click(lc.contacts);
    await lc.click(lc.lenses);
    await lc.click(lc.brands);
    await lc.click(lc.eyeExam);
    await lc.driver.sleep(2000)
    await lc.click(lc.sync);


});

test('test2', async () => {
  await lc.navigate();
  await lc.click(lc.sync);
  await lc.click(lc.insureClick);
  await lc.driver.sleep(2000)
  await lc.setInput(lc.eyemed,'EyeMed\n');
  await lc.setInput(lc.firstName,'Ashly');
  await lc.setInput(lc.lastName,'Baker');
  await lc.setInput(lc.DOB,'01/01/1999');
  await lc.setInput(lc.zip,'33028');
  await fs.writeFile(`${__dirname}/insurance.png`, 
    await lc.driver.takeScreenshot(), 'base64', (e) => {
    if (e) console.error(e)
    else console.log('page saved'); 
}); 

});

test('test3', async () => {
    await lc.navigate();
    await lc.click(lc.findaStore)
    await fs.writeFile(`${__dirname}/findaStore.png`, 
        await lc.driver.takeScreenshot(), 'base64', (e) => {
        if (e) console.error(e)
    else console.log('page saved'); 
    }); 
});

test('test4', async () => {
await lc.navigate();
await lc.driver.sleep (2000)
await lc.click(lc.sunglasses);
await lc.click(lc.shopSunglasses);
await lc.driver.sleep (2000)
await lc.click(lc.versace);
await lc.click(lc.addTobag);
});
test('test5', async () => {
    await lc.navigate();
    await lc.click(lc.UnitedStatesEspanol)
    await lc.driver.quit()
})
