import {expect} from 'chai'
import sinon from 'sinon'
import User from '../User'

describe('sinon', function () {
  it('should mock object method', function () {
    const user = new User('world');

    const upperNameSpy = sinon.spy(user, 'upperName');

    user.hello();

    expect(upperNameSpy.calledOnceWith('world')).equal(true);
  })
})
