import {write, lineWrite} from "../assets/utils/write.js"
import { sleep } from "../assets/utils/sleep.js"
import { boxOpacity } from "../assets/utils/boxOpacity.js"

async function init() {
    await write("> Accessing...", ".t1", 50)
    await sleep(1000)
    await write("> [ERROR]: ", ".t2", 50)
    await sleep(500)
    await write("Page not found!", ".t2", 50)
    await write("> Try another location", ".t3", 50)
    boxOpacity(".container", 1)
}

init()