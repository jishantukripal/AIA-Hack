/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { connectWallet } from "../../utils/connectWallet";
import Web3Context from "../../context/Web3Context";
import Button from "../web3/Button";
import { handleAccountChange } from "../../utils/handleAccountChange";
import { handleChainChange } from "../../utils/handleChainChange";
import { toast } from "react-hot-toast";

const Wallet = ({ children }) => {
  const [state, setState] = useState({
    provider: null,
    account: null,
    stakingContract: null,
    stakeTokenContract: null,
    chainId: null
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.ethereum.on('accountsChanged', () => handleAccountChange(setState));
    window.ethereum.on('chainChanged', () => handleChainChange(setState));

    return () => {
      window.ethereum.removeListener('accountsChanged', () => handleAccountChange(setState));
      window.ethereum.removeListener('chainChanged', () => handleChainChange(setState));
    };
  }, []);

  const handleWallet = async () => {
    try {
      setIsLoading(true);
      const { provider, selectedAccount, stakingContract, stakeTokenContract, chainId } = await connectWallet();
      setState({ provider, selectedAccount, stakingContract, stakeTokenContract, chainId });
    } catch (error) {
      toast.error("Error connecting wallet");
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <Web3Context.Provider value={state}>{children}</Web3Context.Provider>
      {!state.account && (
        <div className="fixed bottom-48 right-64">
          {isLoading ? (
            <p className="text-white">Loading...</p>
          ) : (
            <Button onClick={handleWallet} type="button" label="Connect Wallet" />
          )}
        </div>
      )}
    </div>
  );
};

export default Wallet;