import { useContext } from "react";
import Web3Context from "../../context/Web3Context";

const ConnectedNetwork = () => {
  const { chainId } = useContext(Web3Context);

  const getNetworkName = () => {
    if (chainId === null) return "Not connected";
    if (Number(chainId) === 1320 ) return "AIA Testnet";
    return "Network Not Detected";
  };

  return (
    <div className="px-4 py-2 bg-gray-800 rounded-lg ml-4">
      <p className="text-sm text-gray-300">{getNetworkName()}</p>
    </div>
  );
};

export default ConnectedNetwork;