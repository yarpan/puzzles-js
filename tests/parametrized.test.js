import { expect, test } from '@playwright/test'

const people = ['Kumar', 'Ragul', 'Panos', 'Rahit'];
for (const name of people) {
  test(`testing with ${name}`, async () => {
    // ...
    console.log(name)
  });
  // Also can be done with test.describe()
}