import { useState } from 'react';
import DashboardButton from '../components/web3/DashboardButton';
import DisplayPannel from '../components/web3/DisplayPannel';
import StakeAmount from '../components/web3/StakedAmount';
import TokenApproval from '../components/web3/TokenApproval';
import WithdrawStakeAmount from '../components/web3/Withdraw';
import Wallet from '../components/web3/Wallet';
import StakingContext from '../context/StakingContext';

function StakingApp() {
  const [isReload, setIsReload] = useState(false);

  return (
    <div>
    <Wallet>
      <StakingContext.Provider value={{ isReload, setIsReload }}>
        <div className="min-h-screen bg-gray-900">
          <DashboardButton />
          <main className="container mx-auto px-4 py-8">
            <DisplayPannel />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <TokenApproval />
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <StakeAmount />
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <WithdrawStakeAmount />
              </div>
            </div>
          </main>
        </div>
      </StakingContext.Provider>
    </Wallet>
    </div>
  );
}

export default StakingApp;
