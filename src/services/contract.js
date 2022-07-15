/* eslint-disable no-console */
import { ethers } from 'ethers'
// import Wallet from './wallet'
import contract from '@/utils/Contract.json'

export const initContract = () => {
  // const provider = ethers.providers.getDefaultProvider(['1'])
  const provider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-2-s3.binance.org:8545')
  window.ContractProvider = provider
  // // signer:执行合约的签名方
  // const signer = provider.getSigner()
  // 合约的实体
  const contractObj = new ethers.Contract(contract.address, contract.abi, provider)
  window.Contract = contractObj
}

const contractObj = initContract()
// const contractObj = {}

export const register = async (avatarString, username, domains, addresses) => {
  try {
    const tx = await contractObj.regist(
      avatarString,
      username,
      JSON.stringify(domains),
      JSON.stringify(addresses),
    )
    await tx.wait() // 确定上链
    return true
  }
  catch (err) {
    console.error(err)
    return false
  }
}

export const updateRecord = async (username, domains, addresses) => {
  try {
    const tx = await contractObj.updateRecord(
      username,
      JSON.stringify(domains),
      JSON.stringify(addresses),
    )
    await tx.wait()
    return true
  }
  catch (err) {
    console.error(err)
  }
  return false
}

export const getRecord = async (address) => {
  try {
    const res = await contractObj.getRecord(address)
    return {
      avatarString: res[0] ?? '',
      username: res[1] ?? '',
      domains: res[2] ? JSON.parse(res[2]) : [],
      addresses: res[3] ? JSON.parse(res[3]) : [],
    }
  }
  catch (err) {
    console.error(err)
  }
}

export const getEstimatedGasFee = async (from, to) => {
  try {
    const { ethereum } = window
    if (ethereum) {
      console.log(111111, {
        method: 'eth_estimateGas',
        params: [{ from, to }],
      })
      const res = await ethereum.request({
        method: 'eth_estimateGas',
        params: [{ from, to }],
      })
      return res
    }
  }
  catch (err) {
    console.error(err)
  }
}

const Contract = {
  instance: contractObj ?? {},
  register,
  updateRecord,
  getRecord,
  getEstimatedGasFee,
}

export default Contract
