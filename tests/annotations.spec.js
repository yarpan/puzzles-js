const {test, expect} = require("@playwright/test");

test.describe("login 1", ()=>{
    test("test 1", ()=>{

    })
    test("test 2", ()=>{

    })

})

test.describe("login 2", ()=>{
    test("test 1", ()=>{

    })
    test("test 2", ()=>{

    })

})

test.describe("level 1", ()=>{
    test.describe("level 2", ()=>{
        test.describe("level 3", ()=>{
            test("inner test", ()=>{

            })
        })
    })
})

//for executing this test only
//test.only("standalone test", ()=>{
//})

test.skip("standalone test", ()=>{

})

test.skip("standalone skip", ()=>{

})