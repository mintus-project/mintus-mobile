import { defineStore } from 'pinia'
import { ContractService } from '@/services'

export const useStore = defineStore('main', {
  state: () => {
    return {
      chainInfo: {
        chainId: '',
        currencySymbol: '',
      },
      walletInfo: {
        type: '',
        address: '',
      },
      userInfo: {
        connected: false,
        purchased: false,
        avatarString: '',
      },
      profileInfo: {
        avatarString: '',
        avatarConfig: [],
        username: '',
        domains: [],
        addresses: [],
      },
    }
  },
  actions: {
    async setProfileInfo(address) {
      const { avatarString, username, domains, addresses } = await ContractService.getRecord(address)
      this.profileInfo = {
        ...this.profileInfo,
        avatarString,
        username,
        domains,
        addresses,
      }
    },
  },
})
