const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');




// Mocha Testing Example
// it function
// describe
// beforeEach


class car{
 park(){
  return "stopped";
  }
 drive(){
  return "moving";
  }
}

let Car;
beforeEach(()=> {
  Car = new car();
});

describe('car testing', ()=> {
  it('car parked test', ()=> {
    assert.equal(Car.park(),'stopped');
  });

  it('car drive test',()=> {
    assert.equal(Car.drive(),'moving');
  });
});
