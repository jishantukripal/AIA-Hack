import { useState, useContext, useEffect } from "react";
import { ethers } from "ethers";
import Web3Context from "../../context/Web3Context";
import { toast } from "react-hot-toast";

const EarnedReward = () => {
  const { stakingContract, selectedAccount } = useContext(Web3Context);
  const [rewardVal, setRewardVal] = useState("0");

  useEffect(() => {
    const fetchStakeRewardInfo = async () => {
      try {
        const rewardValueWei = await stakingContract.earned(selectedAccount);
        const rewardValueEth = ethers.formatUnits(rewardValueWei, 18).toString();
        const roundedReward = parseFloat(rewardValueEth).toFixed(2);
        setRewardVal(roundedReward);
      } catch (error) {
        toast.error("Error fetching the reward");
        console.error(error.message);
      }
    };

    const interval = setInterval(() => {
      stakingContract && fetchStakeRewardInfo();
    }, 20000);

    return () => clearInterval(interval);
  }, [stakingContract, selectedAccount]);

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Earned Reward</h2>
      <p className="text-2xl font-bold text-purple-500">{rewardVal} Tokens</p>
    </div>
  );
};

export default EarnedReward;