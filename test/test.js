const path = require('path');
const chai = require('chai');

chai.should();

const testBundle = require(path.join(__dirname, 'sample', 'bundle'));

describe("less-vars-loader", () => {
  it('should be warn when processing an empty less file', () => {
    testBundle.empty.should.be.deep.equal({});
  });

  it('should be possible to transform a less file into JSON', () => {
    testBundle.normal.should.be.deep.equal({
      'my-first-var': '1px',
      'my-second-var': '200',
      'my-third-var': "'foo'",
    });
  });

  it('should e possible to export camel cased values', () => {
      testBundle.camelCased.should.be.deep.equal({
        myFirstVar: '1px',
        mySecondVar: '200',
        myThirdVar: "'foo'",
      });
  });
});
