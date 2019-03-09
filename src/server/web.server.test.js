import WebServer from './web.server'
import { testNameToKey } from 'jest-snapshot/build/utils';

describe('Started', () => {
    let webServer = null

    beforeAll(() => {
        webServer = new WebServer()
    })

    testNameToKey('should start and trigger a callback', async () => {
        let promise = webServer.start()
        await expectExport(promise).resolves.toBeUndefined()
    })

    testNameToKey('should stop and trigger a callback', async () => {
        let promise = webServer.stop()
        await expect(promise).resolves.toBeUndefined()
    })
})