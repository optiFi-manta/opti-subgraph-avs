import {
  Debug as DebugEvent,
  OptiTaskResponded as OptiTaskRespondedEvent,
  Initialized as InitializedEvent,
  NewOptiTaskCreated as NewOptiTaskCreatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RewardsInitiatorUpdated as RewardsInitiatorUpdatedEvent
} from "../generated/OptiFiServiceManager/OptiFiServiceManager"
import {
  Debug,
  OptiTaskResponded,
  Initialized,
  NewOptiTaskCreated,
  OwnershipTransferred,
  RewardsInitiatorUpdated
} from "../generated/schema"

export function handleDebug(event: DebugEvent): void {
  let entity = new Debug(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.storedHash = event.params.storedHash
  entity.suppliedHash = event.params.suppliedHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOptiTaskResponded(event: OptiTaskRespondedEvent): void {
  let entity = new OptiTaskResponded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.taskIndex = event.params.taskIndex
  entity.task_accountAddress = event.params.task.accountAddress
  entity.task_stakingAddress = event.params.task.stakingAddress
  entity.task_taskCreatedBlock = event.params.task.taskCreatedBlock
  entity.operator = event.params.operator
  entity.signature = event.params.signature

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewOptiTaskCreated(event: NewOptiTaskCreatedEvent): void {
  let entity = new NewOptiTaskCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.taskIndex = event.params.taskIndex
  entity.task_accountAddress = event.params.task.accountAddress
  entity.task_stakingAddress = event.params.task.stakingAddress
  entity.task_taskCreatedBlock = event.params.task.taskCreatedBlock

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardsInitiatorUpdated(
  event: RewardsInitiatorUpdatedEvent
): void {
  let entity = new RewardsInitiatorUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.prevRewardsInitiator = event.params.prevRewardsInitiator
  entity.newRewardsInitiator = event.params.newRewardsInitiator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
