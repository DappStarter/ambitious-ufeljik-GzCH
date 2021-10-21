require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile push grid clock box sponsor'; 
let testAccounts = [
"0xde69d819ab937aedcc291e83f48306f23e665e4f512c1c57090369a2bc7e9505",
"0x9b41131a0082671ed684828066d1046d65c7ce9d47bf97960364edf5c3d23d60",
"0xeee31c5734ac5f07a3053a737689c10bb751388310fa0d82229958c01fdd2e46",
"0x204734873a6d0a90d44536520ef807a91cc573896b39ca3c83ecc6ae5dd1841e",
"0xc30dfd8649cd40a16bd140b4d4c3858504a83c90f61c8b3b1956f9756eaf1e23",
"0x8c0208369ddf365441d0ff135d1f98cd6b22921f20e03a02d84270fdaef919bd",
"0xb13a5a1876ea2cac9c5e207bf89fd66057fe1dc61be5829867b21c489dd0fd8c",
"0xd053492d1bad9a74ce6067e5117c9d1b5e4330c2c7a922f9d67b2967b040c3de",
"0xd18c06a1dc7ee018c8a3c6586758267a7043d44dcea746c485df162043150caa",
"0x3f08dfb91ac04850ba399b7736ddaf16826f17c6a252ce6053a08f6a375d21c5"
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

