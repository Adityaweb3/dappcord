const { expect } = require("chai")
const { ethers } = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappcord", function () {
 
  const NAME = "Dappcord"
  const SYMBOL = "DC"

  let dappcord
  let deployer , user 

  
  describe("Deployment", function () {
    it("Sets the name", async() => {


      // Deploy the contract
      
      const Dappcord = await ethers.getContractFactory("Dappcord"),
      dappcord = await Dappcord.deploy(NAME, SYMBOL)
      //fetch and check name
      let result = await dappcord.name()
      expect(result).to.equal(NAME)

      //Fetch and check  symbol 
      
    })


    it("Sets the symbol", async() => {


      const Dappcord = await ethers.getContractFactory("Dappcord"),
      dappcord = await Dappcord.deploy(NAME, SYMBOL)

      

      //Fetch and check  symbol 
     let result = await dappcord.symbol()
      expect(result).to.equal(SYMBOL)
    })

    it("Sets the owner", async() => {


     [deployer , user] = await ethers.getSigners();



      const Dappcord = await ethers.getContractFactory("Dappcord"),
      dappcord = await Dappcord.deploy(NAME, SYMBOL)

      

      //Fetch and check  symbol 
     const result = await dappcord.owner()
      expect(result).to.equal(deployer.address)
    })


  })

})
