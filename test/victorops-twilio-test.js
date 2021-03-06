// Set environment variables VICTOROPS_API_ID, VICTOROPS_API_KEY, and VICTOROPS_TWILIO_SERVICE_API_KEY,
// then run 'npm test' from the application directory to execute tests
process.env.NODE_ENV = 'test';

const chai = require('chai');
const mocha = require('mocha');
const app = require('../victorops-twilio');
const assert = require('assert');

const twiml = {
  gather: function () { return twiml; },
  say: function () {},
  redirect: function () {},
  dial: function () { return twiml; },
  number: function () {},
  hangup: function () {},
  record: function () {}
};
const context = {
  API_HOST: 'api.victorops.com',
  ALERT_HOST: 'alert.victorops.com',
  VICTOROPS_API_ID: process.env.VICTOROPS_API_ID,
  VICTOROPS_API_KEY: process.env.VICTOROPS_API_KEY,
  messages: {
    voicemail: () => {},
    connecting: () => {}
  },
  VICTOROPS_TWILIO_SERVICE_API_KEY: process.env.VICTOROPS_TWILIO_SERVICE_API_KEY,
  DOMAIN: 'string',
  NUMBER_OF_MENUS: '2',
  VOICE: undefined
};
context.headers = {
  'Content-Type': 'application/json',
  'X-VO-Api-Key': context.VICTOROPS_API_KEY,
  'X-VO-Api-Id': context.VICTOROPS_API_ID
};
const event = {payloadString: JSON.stringify({}), To: '+1 444-333-2222'};
const payload = {
  callerId: '+15555555555',
  voice: 'woman',
  teamsArray: [{name: 'Everyone', slug: 'everyone'}],
  phoneNumbers: [{user: 'dscott', phone: '+1 555-777-9999'}],
  runFunction: 'teamsMenu'
};

describe('main()', function () {
  const p = app.main(twiml, context, event, payload);
  it(`should be a function`, function () {
    assert.equal(typeof app.main === 'function', true, typeof app.main);
  });
  it(`should return a promise`, function () {
    assert.equal(p instanceof Promise, true, typeof p);
  });
  it(`should have it's returned promise resolved`, function (done) {
    p.then(() => done());
  });
});

describe('callOrMessage()', function () {
  const p = app.callOrMessage(twiml, context, payload);
  it(`should be a function`, function () {
    assert.equal(typeof app.callOrMessage === 'function', true, typeof app.callOrMessage);
  });
  it(`should return a promise`, function () {
    assert.equal(p instanceof Promise, true, typeof p);
  });
  it(`should have it's returned promise resolved`, function (done) {
    p.then(() => done());
  });
});

describe('teamsMenu()', function () {
  const p = app.teamsMenu(twiml, context, event, payload);
  it(`should be a function`, function () {
    assert.equal(typeof app.teamsMenu === 'function', true, typeof app.teamsMenu);
  });
  it(`should return a promise`, function () {
    assert.equal(p instanceof Promise, true, typeof p);
  });
  it(`should have it's returned promise resolved`, function (done) {
    p.then(() => done());
  });
});

describe('assignTeam()', function () {
  const p = app.assignTeam(twiml, context, event, payload);
  it(`should be a function`, function () {
    assert.equal(typeof app.assignTeam === 'function', true, typeof app.assignTeam);
  });
  it(`should return a promise`, function () {
    assert.equal(p instanceof Promise, true, typeof p);
  });
  it(`should have it's returned promise resolved`, function (done) {
    p.then(() => done());
  });
});

describe('buildOnCallList()', function () {
  const p = app.buildOnCallList(twiml, context, payload);
  it(`should be a function`, function () {
    assert.equal(typeof app.buildOnCallList === 'function', true, typeof app.buildOnCallList);
  });
  it(`should return a promise`, function () {
    assert.equal(p instanceof Promise, true, typeof p);
  });
  it(`should have it's returned promise resolved`, function (done) {
    p.then(() => done());
  });
});

describe('call()', function () {
  const p = app.call(twiml, context, event, payload);
  it(`should be a function`, function () {
    assert.equal(typeof app.call === 'function', true, typeof app.call);
  });
  it(`should return a promise`, function () {
    assert.equal(p instanceof Promise, true, typeof p);
  });
  it(`should have it's returned promise resolved`, function (done) {
    p.then(() => done());
  });
});

describe('isHuman()', function () {
  const p = app.isHuman(twiml, context, event, payload);
  it(`should be a function`, function () {
    assert.equal(typeof app.isHuman === 'function', true, typeof app.isHuman);
  });
  it(`should return a promise`, function () {
    assert.equal(p instanceof Promise, true, typeof p);
  });
  it(`should have it's returned promise resolved`, function (done) {
    p.then(() => done());
  });
});

describe('leaveAMessage()', function () {
  const p = app.leaveAMessage(twiml, context, event, payload);
  it(`should be a function`, function () {
    assert.equal(typeof app.leaveAMessage === 'function', true, typeof app.leaveAMessage);
  });
  it(`should return a promise`, function () {
    assert.equal(p instanceof Promise, true, typeof p);
  });
  it(`should have it's returned promise resolved`, function (done) {
    p.then(() => done());
  });
});

describe('postToVictorOps()', function () {
  const p = app.postToVictorOps(context, event, payload);
  it(`should be a function`, function () {
    assert.equal(typeof app.postToVictorOps === 'function', true, typeof app.postToVictorOps);
  });
  it(`should return a promise`, function () {
    assert.equal(p instanceof Promise, true, typeof p);
  });
  it(`should have it's returned promise resolved`, function (done) {
    p.then(() => done());
  });
});
