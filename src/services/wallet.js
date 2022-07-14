import WalletConnectProvider from '@walletconnect/web3-provider'
import { providers } from 'ethers'

export const initWallet = async () => {
  //  Create WalletConnect Provider
  const provider = new WalletConnectProvider({
    rpc: {
      1: 'https://mainnet.mycustomnode.com',
      97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    },
  })
  //  Enable session (triggers QR Code modal)
  try {
    const res = await provider.enable()
    // [walletAddress]
  }
  catch (e) {
    console.error('err', e)
  }
  //  Wrap with Web3Provider from ethers.js
  const web3Provider = new providers.Web3Provider(provider)
  window.web3Provider = web3Provider
  return web3Provider
}

const Wallet = {
  provider: {},
  initWallet,
}

export default Wallet
