import {Readable} from "stream";
import {data} from "./big-data"
import {Item} from "./interfaces";

export const getAllItems = async () => {
    const stream = getAllItemsStream()

    return new Promise((resolve, reject) => {
        stream
            .on("data", (item: string) => {
                console.log(item)
            })
            .on("end", () => resolve(true))
            .on("error", (err: Error) => {reject(err)})
    })
}

const getAllItemsStream = (): Readable => {
    const stream = new Readable({objectMode: true, read: () => {}});

    (async function() {
        for(let item of data) {
            await wait(3000) // fake a network request or a long running process. Removing this line will basically mimic a normal sequential for loop

            console.log('converting an item')
            const convertedItem = convertItem(item)

            stream.push(convertedItem)
        }

        stream.push(null)
    })()

    return stream
}

const wait = async (milliseconds: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, milliseconds)
    })
}

const convertItem = (item: Item): string => {
    return JSON.stringify(item)
}