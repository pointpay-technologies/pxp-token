// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PointPayToken is ERC20, ERC20Burnable, ERC20Pausable, Ownable {

    mapping(address => bool) public isBlocklisted;
    
    constructor(address initialOwner, uint256 _supply)
        ERC20("PointPay Token", "PXP")
        Ownable(initialOwner)
    {
        _mint(initialOwner, _supply);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function addToBlockList(address _user) public onlyOwner {
        require(!isBlocklisted[_user], "Not allowed");
        isBlocklisted[_user] = true;
    }
    
    function removeFromBlocklist(address _user) public onlyOwner {
        require(isBlocklisted[_user], "Not allowed");
        isBlocklisted[_user] = false;
    }

    function _update(address from, address to, uint256 value)
        internal
        override(ERC20, ERC20Pausable)
    {
        require(!isBlocklisted[from] && !isBlocklisted[to], "Not allowed");
        super._update(from, to, value);
    }
}
