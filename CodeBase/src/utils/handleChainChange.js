export const handleChainChange = async (setState) => {
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    setState((prevState) => ({ ...prevState, chainId }));
  };