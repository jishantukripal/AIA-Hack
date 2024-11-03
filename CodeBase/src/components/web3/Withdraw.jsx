import { useContext, useRef } from "react";
import { ethers } from "ethers";
import Web3Context from "../../context/Web3Context";
import StakingContext from "../../context/StakingContext";
import Button from "../web3/Button";
import { toast } from "react-hot-toast";

const WithdrawStakeAmount = () => {
  const { stakingContract } = useContext(Web3Context);
  const { isReload, setIsReload } = useContext(StakingContext);
  const withdrawStakeAmountRef = useRef();

  const withdrawStakeToken = async (e) => {
    e.preventDefault();
    const amount = withdrawStakeAmountRef.current.value.trim();
    
    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid positive number");
      return;
    }
    
    const amountToWithdraw = ethers.parseUnits(amount, 18).toString();
    try {
      const transaction = await stakingContract.withdrawStakedTokens(amountToWithdraw);
      await toast.promise(transaction.wait(), {
        loading: "Transaction is pending...",
        success: 'Transaction successful 👌',
        error: 'Transaction failed 🤯'
      });
      withdrawStakeAmountRef.current.value = "";
      setIsReload(!isReload);
    } catch (error) {
      toast.error("Withdrawal Failed");
      console.error(error.message);
    }
  };

  return (
    <form className="space-y-4" onSubmit={withdrawStakeToken}>
      <label className="text-lg font-medium">Withdraw Amount:</label>
      <input type="text" ref={withdrawStakeAmountRef} className="w-full" />
      <Button
        onClick={withdrawStakeToken}
        type="submit"
        label="Withdraw Staked Token"
      />
    </form>
  );
};

export default WithdrawStakeAmount;