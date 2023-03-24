//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KittyToken is ERC20 {

    uint public supplyLimit = 10000;
    uint public burnAmount = 0;

    constructor() ERC20("Kitty", "KTY"){
    }

    function decimals() public view override returns (uint8) {
        return 0;
    }

    function mint(uint _amount) public {
        require(totalSupply() + _amount <= supplyLimit, "Amount exceeds supply limit.");
        _mint(msg.sender, _amount);
    }

    function burn(uint _amount) public {
        _burn(msg.sender, _amount);
        burnAmount += _amount;
    }
}