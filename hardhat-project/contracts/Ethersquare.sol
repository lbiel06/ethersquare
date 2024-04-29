// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract Ethersquare {
    struct Post {
        uint id;
        address senderAddress;
        uint blockTimestamp;
        uint transactionValue;
        string text;
    }

    Post[] public posts;

    function getPosts() external view returns (Post[] memory) {
        return posts;
    }

    function addPost(string memory text) external payable {
        require(bytes(text).length > 0, "Post cannot be empty");
        require(
            bytes(text).length <= 500,
            "Post can contain a maximum of 500 characters"
        );
        posts.push(
            Post({
                id: posts.length,
                senderAddress: msg.sender,
                blockTimestamp: block.timestamp,
                transactionValue: msg.value,
                text: text
            })
        );
    }
}
