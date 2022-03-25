import { ContractAbi } from 'web3x/contract'
export default new ContractAbi([
  {
    inputs: [
      {
        internalType: 'address',
        name: '_uniswapV2Router',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: '_dstToken',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_etherAmount',
        type: 'uint256'
      }
    ],
    name: 'calcEtherToToken',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getTrader',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: '_dstToken',
        type: 'address'
      }
    ],
    name: 'swapEtherToToken',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: '_srcToken',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_srcAmount',
        type: 'uint256'
      }
    ],
    name: 'swapTokenToEther',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  }
])
