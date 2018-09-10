import {expect} from 'chai'
import sinon from 'sinon'
import * as hello from '../hello'

describe('sinon', function () {
    it('should mock the given function', function () {
        const clock = sinon.useFakeTimers(new Date(2000, 11, 22, 33, 44, 55).getTime())
        expect(hello.words('sinon')).eq('Hello, sinon! (977535895000)')

        clock.tick(1000)
        expect(hello.words('sinon')).eq('Hello, sinon! (977535896000)')
    })
})