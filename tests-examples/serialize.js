post = {
    title: "my post",
    likesQty: 23
}
console.log(post)
// { title: 'my post', likesQty: 23 }

postJson = JSON.stringify(post)
console.log(postJson)
// {"title":"my post","likesQty":23}

postNew = JSON.parse(postJson)
console.log(postNew)
// { title: 'my post', likesQty: 23 }