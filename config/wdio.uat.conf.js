import {config as baseConfig} from "../wdio.conf";

export const config = Object.assign(baseConfig, {
    environment: "TEST",
    email: "autotest1@gmail.com",
    firstName: "malavika",
    password: "pass1",
    baseUrl: "https://www.webdriveruniversity.com/"
})