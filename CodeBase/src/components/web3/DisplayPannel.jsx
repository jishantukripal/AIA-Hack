import RewardRate from "./RewardRate";
import StakedAmount from "./StakedAmountDisplay";
import EarnedReward from "./EarnedReward";

const DisplayPannel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <StakedAmount />
      <RewardRate />
      <EarnedReward />
    </div>
  );
};

export default DisplayPannel;