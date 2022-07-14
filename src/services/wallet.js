import WalletConnectProvider from '@walletconnect/web3-provider'
import { providers } from 'ethers'

const initWallet = async () => {
  //  Create WalletConnect Provider
  const provider = new WalletConnectProvider({
    rpc: {
      1: 'https://mainnet.mycustomnode.com',
      97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    },
  })
  //  Enable session (triggers QR Code modal)
  await provider.enable()
  //  Wrap with Web3Provider from ethers.js
  const web3Provider = new providers.Web3Provider(provider)
  return web3Provider
}

const Wallet = {
  provider: initWallet() ?? {},
}

export default Wallet
