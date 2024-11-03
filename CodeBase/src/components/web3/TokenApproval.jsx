import { useContext, useRef } from "react";
import { ethers } from "ethers";
import Web3Context from "../../context/Web3Context";
import Button from "../web3/Button";
import { toast } from "react-hot-toast";

const TokenApproval = () => {
  const { stakeTokenContract, stakingContract } = useContext(Web3Context);
  const approvedTokenRef = useRef();

  const approveToken = async (e) => {
    e.preventDefault();
    const amount = approvedTokenRef.current.value.trim();
    
    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid positive number");
      return;
    }
    
    const amountToSend = ethers.parseUnits(amount, 18).toString();
    try {
      const transaction = await stakeTokenContract.approve(stakingContract.target, amountToSend);
      await toast.promise(transaction.wait(), {
        loading: "Transaction is pending...",
        success: 'Transaction successful 👌',
        error: 'Transaction failed 🤯'
      });
      approvedTokenRef.current.value = "";
    } catch (error) {
      toast.error("Token Approval Failed");
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={approveToken} className="space-y-4">
      <label className="text-lg font-medium">Token Approval:</label>
      <input type="text" ref={approvedTokenRef} className="w-full" />
      <Button type="submit" label="Approve Token" />
    </form>
  );
};

export default TokenApproval;