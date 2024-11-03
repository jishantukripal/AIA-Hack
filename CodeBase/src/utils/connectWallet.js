/* eslint-disable no-useless-catch */
import { ethers } from "ethers";
import stakingAbi from "../ABI/stakingAbi.json"
import stakeTokenAbi from "../ABI/stakeTokenAbi.json";

export const connectWallet = async () => {
  try {
    const { ethereum } = window;
    if (!ethereum) {
      throw new Error("Please install MetaMask!");
    }

    const provider = new ethers.BrowserProvider(ethereum);
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    const selectedAccount = accounts[0];
    const chainId = await ethereum.request({ method: "eth_chainId" });

    
    const stakingContractAddress = "0x80D419f04358365DCeeD0B83Dd1A3744CcF74dF1";
    const tokenContractAddress = "0x84B8BBED63F2896B485c56137D72E88FeFA49636";
    

    const signer = await provider.getSigner();
    const stakingContract = new ethers.Contract(
      stakingContractAddress,
      stakingAbi,
      signer
    );
    const stakeTokenContract = new ethers.Contract(
      tokenContractAddress,
      stakeTokenAbi,
      signer
    );

    return {
      provider,
      selectedAccount,
      stakingContract,
      stakeTokenContract,
      chainId,
    };
  } catch (error) {
    throw error;
  }
};