const {test, expect} = require("@playwright/test");

test.describe("login 1", ()=>{
    test("test 1", ()=>{
        console.log();
    })
    test("test 2", ()=>{
        console.log();
    })

})

test.describe("login 2", ()=>{
    test("test 1", ()=>{
        console.log();
    })
    test("test 2", ()=>{
        console.log();
    })

})

test.describe("level 1", ()=>{
    test.describe("level 2", ()=>{
        test.describe("level 3", ()=>{
            test("inner test", ()=>{
                console.log();
            })
        })
    })
})


//for executing this test only when run from cli
//test.only("standalone test", ()=>{
//})


test("standalone test", ()=>{
    console.log();
})


test.skip("standalone skip", ()=>{
    console.log();
})


//for run from cli
// npx playwright test --grep @mytag
test("test with tag @mytag", ()=>{
    console.log("tagged test");

})


//for displaing custom annotation in report
test("test with custom annotationg", ()=>{
    test.info().annotations.push({type:"bug", description: "custom annotation"})
    console.log("test with custom annotationg");

})