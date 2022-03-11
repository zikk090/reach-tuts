// Automatically generated with Reach 0.1.8 (9e3e58f4)
/* eslint-disable */
export const _version = '0.1.8';
export const _versionHash = '0.1.8 (9e3e58f4)';
export const _backendVersion = 10;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  
  
  const v74 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v77 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './tut/examples/rps-3-bets/index.rsh:21:50:application',
    fs: ['at ./tut/examples/rps-3-bets/index.rsh:19:13:application call to [unknown function] (defined at: ./tut/examples/rps-3-bets/index.rsh:19:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v74, v77],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./tut/examples/rps-3-bets/index.rsh:23:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v74, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v79, v80], secs: v82, time: v81, didSend: v31, from: v78 } = txn1;
      
      sim_r.txns.push({
        amt: v79,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v79, v80], secs: v82, time: v81, didSend: v31, from: v78 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v90], secs: v92, time: v91, didSend: v43, from: v89 } = txn2;
  ;
  const v95 = stdlib.sub(stdlib.checkedBigNumberify('./tut/examples/rps-3-bets/index.rsh:32:33:decimal', stdlib.UInt_max, 4), v90);
  const v96 = stdlib.add(v80, v95);
  const v97 = stdlib.mod(v96, stdlib.checkedBigNumberify('./tut/examples/rps-3-bets/index.rsh:32:49:decimal', stdlib.UInt_max, 3));
  const v98 = stdlib.add(v80, stdlib.checkedBigNumberify('./tut/examples/rps-3-bets/index.rsh:33:34:decimal', stdlib.UInt_max, 1));
  const v99 = stdlib.mod(v98, stdlib.checkedBigNumberify('./tut/examples/rps-3-bets/index.rsh:33:39:decimal', stdlib.UInt_max, 3));
  const v100 = stdlib.eq(v90, v99);
  stdlib.assert(v100, {
    at: './tut/examples/rps-3-bets/index.rsh:33:10:application',
    fs: [],
    msg: null,
    who: 'Alice'
    });
  const v102 = stdlib.eq(v97, stdlib.checkedBigNumberify('./tut/examples/rps-3-bets/index.rsh:36:16:decimal', stdlib.UInt_max, 2));
  const v104 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
  const v107 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
  const v108 = v102 ? v107 : v104;
  const v109 = v108[stdlib.checkedBigNumberify('./tut/examples/rps-3-bets/index.rsh:35:9:array', stdlib.UInt_max, 0)];
  const v110 = v108[stdlib.checkedBigNumberify('./tut/examples/rps-3-bets/index.rsh:35:9:array', stdlib.UInt_max, 1)];
  const v111 = stdlib.mul(v109, v79);
  ;
  const v116 = stdlib.mul(v110, v79);
  ;
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v79, v80], secs: v82, time: v81, didSend: v31, from: v78 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v79), {
    at: './tut/examples/rps-3-bets/index.rsh:27:25:application',
    fs: ['at ./tut/examples/rps-3-bets/index.rsh:26:11:application call to [unknown function] (defined at: ./tut/examples/rps-3-bets/index.rsh:26:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v87 = stdlib.add(v80, stdlib.checkedBigNumberify('./tut/examples/rps-3-bets/index.rsh:28:33:decimal', stdlib.UInt_max, 1));
  const v88 = stdlib.mod(v87, stdlib.checkedBigNumberify('./tut/examples/rps-3-bets/index.rsh:28:37:decimal', stdlib.UInt_max, 3));
  
  const txn2 = await (ctc.sendrecv({
    args: [v78, v79, v80, v88],
    evt_cnt: 1,
    funcNum: 1,
    lct: v81,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v79, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v90], secs: v92, time: v91, didSend: v43, from: v89 } = txn2;
      
      sim_r.txns.push({
        amt: v79,
        kind: 'to',
        tok: undefined
        });
      const v95 = stdlib.sub(stdlib.checkedBigNumberify('./tut/examples/rps-3-bets/index.rsh:32:33:decimal', stdlib.UInt_max, 4), v90);
      const v96 = stdlib.add(v80, v95);
      const v97 = stdlib.mod(v96, stdlib.checkedBigNumberify('./tut/examples/rps-3-bets/index.rsh:32:49:decimal', stdlib.UInt_max, 3));
      const v100 = stdlib.eq(v90, v88);
      stdlib.assert(v100, {
        at: './tut/examples/rps-3-bets/index.rsh:33:10:application',
        fs: [],
        msg: null,
        who: 'Bob'
        });
      const v102 = stdlib.eq(v97, stdlib.checkedBigNumberify('./tut/examples/rps-3-bets/index.rsh:36:16:decimal', stdlib.UInt_max, 2));
      const v104 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
      const v107 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
      const v108 = v102 ? v107 : v104;
      const v109 = v108[stdlib.checkedBigNumberify('./tut/examples/rps-3-bets/index.rsh:35:9:array', stdlib.UInt_max, 0)];
      const v110 = v108[stdlib.checkedBigNumberify('./tut/examples/rps-3-bets/index.rsh:35:9:array', stdlib.UInt_max, 1)];
      const v111 = stdlib.mul(v109, v79);
      sim_r.txns.push({
        amt: v111,
        kind: 'from',
        to: v78,
        tok: undefined
        });
      const v116 = stdlib.mul(v110, v79);
      sim_r.txns.push({
        amt: v116,
        kind: 'from',
        to: v89,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v90], secs: v92, time: v91, didSend: v43, from: v89 } = txn2;
  ;
  const v95 = stdlib.sub(stdlib.checkedBigNumberify('./tut/examples/rps-3-bets/index.rsh:32:33:decimal', stdlib.UInt_max, 4), v90);
  const v96 = stdlib.add(v80, v95);
  const v97 = stdlib.mod(v96, stdlib.checkedBigNumberify('./tut/examples/rps-3-bets/index.rsh:32:49:decimal', stdlib.UInt_max, 3));
  const v100 = stdlib.eq(v90, v88);
  stdlib.assert(v100, {
    at: './tut/examples/rps-3-bets/index.rsh:33:10:application',
    fs: [],
    msg: null,
    who: 'Bob'
    });
  const v102 = stdlib.eq(v97, stdlib.checkedBigNumberify('./tut/examples/rps-3-bets/index.rsh:36:16:decimal', stdlib.UInt_max, 2));
  const v104 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
  const v107 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
  const v108 = v102 ? v107 : v104;
  const v109 = v108[stdlib.checkedBigNumberify('./tut/examples/rps-3-bets/index.rsh:35:9:array', stdlib.UInt_max, 0)];
  const v110 = v108[stdlib.checkedBigNumberify('./tut/examples/rps-3-bets/index.rsh:35:9:array', stdlib.UInt_max, 1)];
  const v111 = stdlib.mul(v109, v79);
  ;
  const v116 = stdlib.mul(v110, v79);
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BSAEAQAIAyYCAAEAIzUAMRhBAdEoZEkjWzUBJFs1AjYaABdJQQAHIzUEIjUGADYaARc2GgIXNQQ2GgM1BUkiDEAA5CISRCI0ARJENARJIxJMNAISEUQpZEk1A4EgWzX/NAOBKFs1/jQFFzX9gATVFRkUNP0WULA0/0lBAB00AEkiCDUATEsBOAgSRCJLATgQEkQyCksBOAcSREg0/TT+IgglGBJEgBAAAAAAAAAAAAAAAAAAAAACgBAAAAAAAAAAAgAAAAAAAAAANP6BBDT9CQglGIECEk01/DT8I1s0/wtJQQAPsbIIIrIQNANXACCyB7MjSDT8JFs0/wtJQQAMsbIIIrIQMQCyB7MjSCOxsggishAyCbIJMgqyB7MjSDEZgQUSREIAl0gjNAESRDQESSMSTDQCEhFENAUjWzX/NAUkWzX+gASs0R/DNP8WUDT+FlCwgaCNBklBAB00AEkiCDUATEsBOAgSRCJLATgQEkQyCksBOAcSREg0/0lBAB00AEkiCDUATEsBOAgSRCJLATgQEkQyCksBOAcSREgxADT/FlA0/hZQKUsBVwAwZ0giNQEyBjUCMRkjEkRCAAAoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkiCDIEEkQxFhJEIkMxGSMSRCM1ASM1AkL/yw==`,
  appClear: `BQ==`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 48,
  unsupported: [],
  version: 9,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161094138038061094183398101604081905261002291610213565b6000805543600355604080518251815260208084015180518284015201518183015290517f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9181900360600190a1602081015151610083903414600761011b565b6100b0604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b33808252602083810180515182850190815290518201516040808601918252600160008190554390558051808501959095529151848301525160608085019190915281518085039091018152608090930190528151610113926002920190610144565b5050506102a8565b816101405760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546101509061026d565b90600052602060002090601f01602090048101928261017257600085556101b8565b82601f1061018b57805160ff19168380011785556101b8565b828001600101855582156101b8579182015b828111156101b857825182559160200191906001019061019d565b506101c49291506101c8565b5090565b5b808211156101c457600081556001016101c9565b604080519081016001600160401b038111828210171561020d57634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303606081121561022657600080fd5b61022e6101dd565b835181526040601f198301121561024457600080fd5b61024c6101dd565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061028157607f821691505b602082108114156102a257634e487b7160e01b600052602260045260246000fd5b50919050565b61068a806102b76000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b6100476100903660046104a8565b6100b8565b3480156100a157600080fd5b506100aa610325565b6040516100649291906104c0565b6100c8600160005414600a6103c2565b6100e2813515806100db57506001548235145b600b6103c2565b6000808055600280546100f49061051d565b80601f01602080910402602001604051908101604052809291908181526020018280546101209061051d565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b50505050508060200190518101906101859190610552565b905061018f6103eb565b6040805184358152602080860135908201527f7df13b968ce0c210e3dcbfe64599eb5a3348cfa173e4eb2d8ee13c767a060b02910160405180910390a16101dd8260200151341460086103c2565b61020a6003600184604001516101f391906105e4565b6101fd91906105fc565b60208501351460096103c2565b805160009081905281516002602091820181905281840180518290525182019290925260039061023e90860135600461061e565b846040015161024d91906105e4565b61025791906105fc565b14610263578051610269565b80602001515b604082018190528251602084015191516001600160a01b03909116916108fc916102939190610635565b6040518115909202916000818181858888f193505050501580156102bb573d6000803e3d6000fd5b50336001600160a01b03166108fc83602001518360400151602001516102e19190610635565b6040518115909202916000818181858888f19350505050158015610309573d6000803e3d6000fd5b506000808055600181905561032090600290610452565b505050565b60006060600054600280805461033a9061051d565b80601f01602080910402602001604051908101604052809291908181526020018280546103669061051d565b80156103b35780601f10610388576101008083540402835291602001916103b3565b820191906000526020600020905b81548152906001019060200180831161039657829003601f168201915b50505050509050915091509091565b816103e75760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160a0810190915260006060820181815260808301919091528190815260200161042b604051806040016040528060008152602001600081525090565b815260200161044d604051806040016040528060008152602001600081525090565b905290565b50805461045e9061051d565b6000825580601f1061046e575050565b601f01602090049060005260206000209081019061048c919061048f565b50565b5b808211156104a45760008155600101610490565b5090565b6000604082840312156104ba57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156104f4578581018301518582016060015282016104d8565b81811115610506576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061053157607f821691505b602082108114156104ba57634e487b7160e01b600052602260045260246000fd5b60006060828403121561056457600080fd5b6040516060810181811067ffffffffffffffff8211171561059557634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b03811681146105af57600080fd5b8152602083810151908201526040928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156105f7576105f76105ce565b500190565b60008261061957634e487b7160e01b600052601260045260246000fd5b500690565b600082821015610630576106306105ce565b500390565b600081600019048311821515161561064f5761064f6105ce565b50029056fea2646970667358221220c8960751c05911bff0b44c9f6b7c045f39b8b290259a6ae22cf691b0aa28d80864736f6c63430008090033`,
  BytecodeLen: 2369,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './tut/examples/rps-3-bets/index.rsh:24:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './tut/examples/rps-3-bets/index.rsh:42:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
