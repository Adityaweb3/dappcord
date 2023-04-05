const { expect } = require("chai")
const { ethers } = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappcord", function () {

  let dappcord

  beforeEach(async() => {
    const Dappcord = await ethers.getContractFactory("Dappcord"),
      dappcord = await Dappcord.deploy('Dappcord', 'DC')

  })

  describe("Deployment", function () {
    it("Sets the name", async() => {


      // Deploy the contract
      

      //fetch and check name
      let result = await dappcord.name()
      expect(result).to.equal("Dappcord")

      //Fetch and check  symbol 
      
    })


    it("Sets the symbol", async() => {


      // Deploy the contract
      const Dappcord = await ethers.getContractFactory("Dappcord"),
      dappcord = await Dappcord.deploy('Dappcord', 'DC')

      

      //Fetch and check  symbol 
     let  result = await dappcord.symbol()
      expect(result).to.equal("DC")
    })


  })

})
