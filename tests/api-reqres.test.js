import { test, expect, APIResponse } from "@playwright/test";
import { faker } from '@faker-js/faker';

const BASE_URL = 'https://reqres.in';



test("get all users", async ({ request }) => {
    const ENDPOINT = '/api/users?page=2';
    const responseRaw = await request.get(BASE_URL + ENDPOINT);

    expect(responseRaw.status()).toBe(200);
    expect(responseRaw.statusText()).toBe('OK');
    const responseJson = await responseRaw.json();
    console.log(responseJson);

});

test("create new user", async ({ request }) => {
    const ENDPOINT = '/api/users';
    const userEmail = faker.internet.email();
    const responseRaw = await request.post(BASE_URL + ENDPOINT, {
        data: {
            "name": "morpheus",
            "job": "leader",
            "email": userEmail
        }
    });

    expect(responseRaw.status()).toBe(201);
    expect(responseRaw.statusText()).toBe('Created');
    const responseJson = await responseRaw.json();
    console.log(responseJson);

});

test("update user", async ({ request }) => {
    const ENDPOINT = '/api/users/2';
    const userEmail = faker.internet.email();
    const responseRaw = await request.put(BASE_URL + ENDPOINT, {
        data: {
            "name": "morpheus",
            "job": "resident",
            "email": userEmail
        }
    });

    expect(responseRaw.status()).toBe(200);
    expect(responseRaw.statusText()).toBe('OK');
    const responseJson = await responseRaw.json();
    console.log('userEmail: ' + userEmail);
    console.log(responseJson);


});

test("patch user", async ({ request }) => {
    const ENDPOINT = '/api/users/2';


    expect(responseRaw.status()).toBe(200);
    expect(responseRaw.statusText()).toBe('OK');
    const responseJson = await responseRaw.json();


});

test("delete user", async ({ request }) => {
    const ENDPOINT = '/api/users/2';

    expect(responseRaw.status()).toBe(200);
    expect(responseRaw.statusText()).toBe('OK');
    const responseJson = await responseRaw.json();


});




function createRandomUser() {
    return {
        userId: faker.string.numeric(),
        firstname: faker.person.firstName(),
        lasttname: faker.person.lastName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
        job: faker.company.buzzNoun(),
    };

    // {
    //     "id": 1,
    //     "email": "george.bluth@reqres.in",
    //     "first_name": "George",
    //     "last_name": "Bluth",
    //     "avatar": "https://reqres.in/img/faces/1-image.jpg"
    // },


    test("create new user2", async ({ request }) => {

        const responseBody = await response.json();
        expect(responseBody["id"]).toBeDefined();
        expect(responseBody["createdAt"]).toBeDefined();
        expect(responseBody["name"]).toBe("morpheus");
        expect(responseBody["email"]).toBeDefined();
        expect(responseBody["email"].includes("@gmail.com")).toBeTruthy();
    });

    test("get all users2", async ({ request }) => {

        const responseJson = await responseRaw.json();

        expect(responseJson["page"]).toBe(2);
        expect(responseJson["per_page"]).toBe(6);
        expect(responseJson["total"]).toBe(12);
        expect(responseJson["total_pages"]).toBe(2);
        expect(responseJson["data"].length).toBe(6);

        expect(responseJson["data"]).toContainEqual(
            expect.objectContaining({
                id: 7,
                email: "michael.lawson@reqres.in",
                first_name: "Michael",
                last_name: "Lawson",
                avatar: "https://reqres.in/img/faces/7-image.jpg",
            })
        );
    });
}
