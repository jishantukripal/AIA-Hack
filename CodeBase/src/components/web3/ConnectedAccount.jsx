import { useContext } from "react";
import Web3Context from "../../context/Web3Context";

const ConnectedAccount = () => {
  const { selectedAccount } = useContext(Web3Context);
  
  return (
    <div className="px-4 py-2 bg-gray-800 rounded-lg">
      <p className="text-sm text-gray-300">
        {selectedAccount 
          ? `${selectedAccount.slice(0, 6)}...${selectedAccount.slice(-4)}` 
          : "Connect Account"}
      </p>
    </div>
  );
};

export default ConnectedAccount;