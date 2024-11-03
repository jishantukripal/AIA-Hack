import ConnectedAccount from "./ConnectedAccount";
import ConnectedNetwork from "./ConnectedNetwork";
import ClaimReward from "../web3/ClaimReward";

const DashboardButton = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-800 pt-[100px]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <ClaimReward />
        </div>
        <div className="flex items-center">
          <ConnectedAccount />
          <ConnectedNetwork />
        </div>
      </div>
    </header>
  );
};

export default DashboardButton;