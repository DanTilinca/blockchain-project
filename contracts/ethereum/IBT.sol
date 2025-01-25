// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IBT {
    string public name = "Inter Blockchain Token";
    string public symbol = "IBT";
    uint8 public decimals = 18;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;
    address public owner;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Mint(address indexed to, uint256 value);
    event Burn(address indexed from, uint256 value);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function mint(address to, uint256 value) external onlyOwner {
        totalSupply += value;
        balanceOf[to] += value;
        emit Mint(to, value);
    }

    function burn(address from, uint256 value) external onlyOwner {
        require(balanceOf[from] >= value, "Insufficient balance");
        totalSupply -= value;
        balanceOf[from] -= value;
        emit Burn(from, value);
    }
}
