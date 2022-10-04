import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-network-helpers");


describe("Staking", function () {
    
    async function deployStaking() {
    const decimals = 10 ** 18;
    const amountIn = 1000 * decimals;
    const BAYCHolder = '0x1CFB8a2e4c2e849593882213b2468E369271dad2';
    await helpers.impersonateAccount(BAYCHolder);
    const Signer = await ethers.getSigner(BAYCHolder);

        // Deploying contracts
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();

    const Staking = await ethers.getContractFactory("Staking");
    const staking = await Staking.deploy(token.address);

    const Tok = await ethers.getContractAt("IERC20", token.address);
    const Stake = await ethers.getContractAt("IStaking", staking.address);

    const SignerBal = await Tok.balanceOf(Signer.address);
    const stakeBal = await Tok.transfer(staking.address, amountIn);
  
    }

    });

