require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net property include area sun such'; 
let testAccounts = [
"0xdb1560c99aefe67122ade23325c5202b1e3001786bef4c974c54aea98070e198",
"0x2120d0c8b3f213715e46b92ea89590cf961562b27d8e9e1beee3307027adf55a",
"0x1b1c17fedd3ea4e9136693a09296b4353710fb7a583e9b4bc3b71a55f1bbffd1",
"0x51b569d15cd7ec07c7986644676968ebe78cbbed6f59e1d17d20da31cd9d4930",
"0x3384c63a5b69ad2134180eeabeeaaab30f0d76293abcb299f7c278e3f2416052",
"0xb30e2504f26ac8a866661f9e32fccd755a8c51ec8cb330d45d2cf1bdc5183207",
"0x045b7c8a07668bd4d0f722c84d00829c2006463ee6c48532543e9adeaf582a4a",
"0xfa0c1b5fbe3985ea1534b8054f2910b72535b8fdec7969146ae5564a1311c076",
"0x490881bc3b7c085c692c4cf27e1b58744fa792cbbb9dbb24119b996b96809e4a",
"0xe96a68267f0acc768c3b781e5da5b33c6cb40efaa8cfaf6099f48c3dbbd4ac4e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

