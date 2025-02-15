## 📊 AVS Subgraphs

### OptiFinance Subgraph
This subgraph indexes events from the OptiFinance smart contract on Base Sepolia, enabling efficient querying of deposit, swap, withdrawal, and ownership events.

## 📜 Indexed Entities & Events

### **Entities**
The subgraph indexes the following entities:
- `Debug`
- `OptiTaskResponded`
- `Initialized`
- `NewOptiTaskCreated`
- `OwnershipTransferred`
- `RewardsInitiatorUpdated`

### **Event Handlers**
| Event | Handler |
|--------|-------------|
| `Debug(bytes32,bytes32)` | `handleDebug` |
| `OptiTaskResponded(indexed uint32,(address,string,uint32),address,bytes)` | `handleOptiTaskResponded` |
| `Initialized(uint8)` | `handleInitialized` |
| `NewOptiTaskCreated(indexed uint32,(address,string,uint32))` | `handleNewOptiTaskCreated` |
| `OwnershipTransferred(indexed address,indexed address)` | `handleOwnershipTransferred` |
| `RewardsInitiatorUpdated(address,address)` | `handleRewardsInitiatorUpdated` |

## 🚀 Deployment
To deploy this subgraph, follow these steps:

1. Install Graph CLI:
   ```bash
   npm install -g @graphprotocol/graph-cli
   ```
2. Authenticate with The Graph:
   ```bash
   graph auth --product hosted-service YOUR_ACCESS_TOKEN
   ```
3. Build the subgraph:
   ```bash
   graph codegen && graph build
   ```
4. Deploy the subgraph:
   ```bash
   graph deploy --product hosted-service YOUR_GITHUB_USERNAME/optifi-subgraph
   ```

#### 📌 **Details:**
- **Network:** Base Sepolia
- **Contracts Indexed:**
  - OptiFinance
  - MockStakingUniswap
  - MockStakingUSDXMoney
  - MockStakingAaveV3
  - MockStakingStargateV3
  - MockStakingCompoundV3
  - MockUNI, MockWETH, MockUSDC, MockDAI, MockUSDT
- **Event Handlers:** Deposit, Swap, Withdrawal, OwnershipTransferred, Staking Events, etc.

🛠 **Tech Used:**
- **Graph Protocol** for indexing
- **AssemblyScript** for mapping
- **Ethereum Events** for tracking contract interactions

📁 **Schema & Code:** [schema.graphql](./schema.graphql), [Mappings](./src/)

---

### OptiFiServiceManager Subgraph
This subgraph indexes the OptiFi Service Manager contract, tracking new tasks, responses, and ownership updates.

#### 📌 **Details:**
- **Network:** Base Sepolia
- **Contracts Indexed:**
  - OptiFiServiceManager
  - TransparentUpgradeableProxy
- **Event Handlers:** Debug, OptiTaskResponded, Initialized, NewOptiTaskCreated, OwnershipTransferred, RewardsInitiatorUpdated

🛠 **Tech Used:**
- **Graph Protocol**
- **AssemblyScript**
- **Ethereum Events**

📁 **Schema & Code:** [schema.graphql](./schema.graphql), [Mappings](./src/)


🚀 Happy Coding!