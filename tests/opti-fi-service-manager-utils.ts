import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Debug,
  OptiTaskResponded,
  Initialized,
  NewOptiTaskCreated,
  OwnershipTransferred,
  RewardsInitiatorUpdated
} from "../generated/OptiFiServiceManager/OptiFiServiceManager"

export function createDebugEvent(
  storedHash: Bytes,
  suppliedHash: Bytes
): Debug {
  let debugEvent = changetype<Debug>(newMockEvent())

  debugEvent.parameters = new Array()

  debugEvent.parameters.push(
    new ethereum.EventParam(
      "storedHash",
      ethereum.Value.fromFixedBytes(storedHash)
    )
  )
  debugEvent.parameters.push(
    new ethereum.EventParam(
      "suppliedHash",
      ethereum.Value.fromFixedBytes(suppliedHash)
    )
  )

  return debugEvent
}

export function createOptiTaskRespondedEvent(
  taskIndex: BigInt,
  task: ethereum.Tuple,
  operator: Address,
  signature: Bytes
): OptiTaskResponded {
  let optifiTaskRespondedEvent = changetype<OptiTaskResponded>(newMockEvent())

  optifiTaskRespondedEvent.parameters = new Array()

  optifiTaskRespondedEvent.parameters.push(
    new ethereum.EventParam(
      "taskIndex",
      ethereum.Value.fromUnsignedBigInt(taskIndex)
    )
  )
  optifiTaskRespondedEvent.parameters.push(
    new ethereum.EventParam("task", ethereum.Value.fromTuple(task))
  )
  optifiTaskRespondedEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  optifiTaskRespondedEvent.parameters.push(
    new ethereum.EventParam("signature", ethereum.Value.fromBytes(signature))
  )

  return optifiTaskRespondedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createNewOptiTaskCreatedEvent(
  taskIndex: BigInt,
  task: ethereum.Tuple
): NewOptiTaskCreated {
  let newOptiTaskCreatedEvent = changetype<NewOptiTaskCreated>(newMockEvent())

  newOptiTaskCreatedEvent.parameters = new Array()

  newOptiTaskCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "taskIndex",
      ethereum.Value.fromUnsignedBigInt(taskIndex)
    )
  )
  newOptiTaskCreatedEvent.parameters.push(
    new ethereum.EventParam("task", ethereum.Value.fromTuple(task))
  )

  return newOptiTaskCreatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRewardsInitiatorUpdatedEvent(
  prevRewardsInitiator: Address,
  newRewardsInitiator: Address
): RewardsInitiatorUpdated {
  let rewardsInitiatorUpdatedEvent =
    changetype<RewardsInitiatorUpdated>(newMockEvent())

  rewardsInitiatorUpdatedEvent.parameters = new Array()

  rewardsInitiatorUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "prevRewardsInitiator",
      ethereum.Value.fromAddress(prevRewardsInitiator)
    )
  )
  rewardsInitiatorUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newRewardsInitiator",
      ethereum.Value.fromAddress(newRewardsInitiator)
    )
  )

  return rewardsInitiatorUpdatedEvent
}
