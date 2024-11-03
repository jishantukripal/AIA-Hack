import { useContext } from "react";
import Web3Context from "../../context/Web3Context";
import Button from "../web3/Button";
import { toast } from "react-hot-toast";

const ClaimReward = () => {
  const { stakingContract } = useContext(Web3Context);

  const claimReward = async () => {
    try {
      const transaction = await stakingContract.getReward();
      await toast.promise(transaction.wait(), {
        loading: "Transaction is pending...",
        success: 'Transaction successful 👌',
        error: 'Transaction failed 🤯'
      });
    } catch (error) {
      console.error("Claim Reward Failed", error.message);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
      <Button type="button" label="Claim Reward" onClick={claimReward}/>
    </div>
  );
};

export default ClaimReward;