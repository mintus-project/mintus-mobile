/* eslint-disable no-console */
import WalletConnectProvider from '@walletconnect/web3-provider'
import { providers } from 'ethers'

export const getAccount = async () => {
  try {
    const provider = new WalletConnectProvider({
      infuraId: '774b1e4252de48c3997d66ac5f5078d8',
      rpc: {
        1: 'https://rpc.ankr.com/eth',
        97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      },
    })
    await provider.enable()
    const walletProvider = new providers.Web3Provider(provider)
    window.WalletProvider = walletProvider

    // 账户变化
    provider.on('accountsChanged', (accounts) => {
      console.log('accountsChanged: ', accounts)
    })

    // chainId变更
    provider.on('chainChanged', (chainId) => {
      console.log('chainChanged: ', chainId)
    })

    // 会话断开连接
    provider.on('disconnect', (code, reason) => {
      console.log('disconnect: ', code, reason)
      window.location.reload()
    })
  }
  catch (e) {
    console.error('Wallet.getAccount: ', e)
  }
}

const Wallet = {
  provider: {},
  getAccount,
}

export default Wallet
