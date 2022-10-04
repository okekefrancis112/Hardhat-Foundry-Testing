// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@rari-capital/solmate/src/tokens/ERC20.sol";

    /// @title This is a swap contract for the NFT Market
    /// @author team unicorn

  contract Token is ERC20("Unicorn Token", "UNC", 18) {

      // total supply of Unicorn token is 100,000,000
      uint256 constant initialSupply = 100000000 * (10 ** 18);

      // mint the tokens
      constructor() {
          _mint(msg.sender, initialSupply);
      }

  }