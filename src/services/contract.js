import { ethers } from 'ethers'
import contract from '@/utils/Contract.json'

export const initContract = () => {
  // const provider = ethers.providers.getDefaultProvider(['1']) // 上主网之后default is better（更快更稳定）
  const provider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-2-s3.binance.org:8545')
  window.ContractProvider = provider
  // 合约实体
  const contractObj = new ethers.Contract(contract.address, contract.abi, provider)
  window.Contract = contractObj
}

initContract()

export const getRecord = async (address) => {
  if (window.Contract === undefined)
    initContract()
  const res = await window.Contract?.getRecord(address)
  return {
    avatarString: res[0] ?? '',
    username: res[1] ?? '',
    domains: res[2] ? JSON.parse(res[2]) : [],
    addresses: res[3] ? JSON.parse(res[3]) : [],
  }
}

const ContractService = {
  getRecord,
}

export default ContractService
