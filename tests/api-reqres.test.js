import { test, expect } from "@playwright/test";
import { faker } from '@faker-js/faker';

const BASE_URL = 'https://reqres.in';

test("get all users", async ({ request }) => {
    const ENDPOINT = '/api/users?page=2';
    const responseRaw = await request.get(BASE_URL + ENDPOINT);
    const responseJson = await responseRaw.json();

    expect(responseRaw.status()).toBe(200);
    expect(responseRaw.statusText()).toBe('OK');
    expect(responseJson.page).toBe(2);
    expect(responseJson.per_page).toBe(6);
    expect(responseJson.total).toBe(12);
    expect(responseJson.total_pages).toBe(2);
    expect(responseJson.data.length).toBe(6);
    expect(responseJson.data).toContainEqual(
        expect.objectContaining({
            id: 7,
            email: "michael.lawson@reqres.in",
            first_name: "Michael",
            last_name: "Lawson",
            avatar: "https://reqres.in/img/faces/7-image.jpg",
        })
    );
    //console.log(responseJson);
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
    const responseJson = await responseRaw.json();

    expect(responseRaw.status()).toBe(201);
    expect(responseRaw.statusText()).toBe('Created');
    expect(responseJson.name).toBe("morpheus");
    expect(responseJson.job).toBe("leader");
    expect(responseJson.email).toBe(userEmail);
    expect(responseJson.id).toBeDefined();
    expect(responseJson.createdAt).toBeDefined();
    //console.log(responseJson);
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
    const responseJson = await responseRaw.json();

    expect(responseRaw.status()).toBe(200);
    expect(responseRaw.statusText()).toBe('OK');
    expect(responseJson.name).toBe("morpheus");
    expect(responseJson.job).toBe("resident");
    expect(responseJson.email).toBe(userEmail);
    expect(responseJson.updatedAt).toBeDefined();
    //console.log(responseJson);
});

test("patch user", async ({ request }) => {
    const ENDPOINT = '/api/users/2';
    const userEmail = faker.internet.email();
    const responseRaw = await request.patch(BASE_URL + ENDPOINT, {
        data: {
            "job": "member"
        }
    });
    const responseJson = await responseRaw.json();

    expect(responseRaw.status()).toBe(200);
    expect(responseRaw.statusText()).toBe('OK');
    expect(responseJson.job).toBe("member");
    expect(responseJson.updatedAt).toBeDefined();
    //console.log(responseJson);
});

test("delete user", async ({ request }) => {
    const ENDPOINT = '/api/users/2';
    const responseRaw = await request.delete(BASE_URL + ENDPOINT);

    expect(responseRaw.status()).toBe(204);
    expect(responseRaw.statusText()).toBe('No Content');
    expect(responseRaw.body()).toBeNull;
});