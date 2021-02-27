import { get, getCatBreeds } from "./index";

test("get() can make requests", async () => {
  const response = await get({ path: "/breeds" });
  expect(response.statusText).toBe("OK");
});

test("getCatBreeds() can get breeds list", async () => {
  const response = await getCatBreeds();

  expect(response.data[0].name).not.toEqual("");
});
