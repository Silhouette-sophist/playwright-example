"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
test_1.test.beforeEach(({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.goto("https://demo.playwright.dev/todomvc");
}));
const TODO_ITEMS = [
    "buy some cheese",
    "feed the cat",
    "book a doctors appointment",
];
test_1.test.describe("New Todo", () => {
    (0, test_1.test)("should allow me to add todo items", ({ context, page, request, }) => __awaiter(void 0, void 0, void 0, function* () {
        // Create 1st todo.
        yield page.locator(".new-todo").fill(TODO_ITEMS[0]);
        yield page.locator(".new-todo").press("Enter");
        // Make sure the list only has one todo item.
        yield (0, test_1.expect)(page.locator(".view label")).toHaveText([TODO_ITEMS[0]]);
        // Create 2nd todo.
        yield page.locator(".new-todo").fill(TODO_ITEMS[1]);
        yield page.locator(".new-todo").press("Enter");
        // Make sure the list now has two todo items.
        yield (0, test_1.expect)(page.locator(".view label")).toHaveText([
            TODO_ITEMS[0],
            TODO_ITEMS[1],
        ]);
        request.post("www.baidu.com").then((value) => {
            console.log(`post response ${value}`);
        }, (reason) => {
            console.log(`post error ${reason}`);
        });
    }));
});
