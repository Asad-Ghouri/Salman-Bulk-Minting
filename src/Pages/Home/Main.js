import { useState, useEffect} from "react";

import { MinusIcon, PlusIcon } from "../../icons";

import { useMoralis } from "react-moralis";

import { Moralis } from "moralis";

import Image from "../../images/nft.jpeg";

import Accordion from "../../components/Accordition"

import React from "react";

import {Footer} from "../../components/Footer/Footer"

import HeroSection  from "../../components/HeroSection/HeroSection";

export const Main = () => {
  const [numb, setNumb] = useState(0);

  const ABI = [
    {
      inputs: [{ internalType: "string", name: "_uri", type: "string" }],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    { inputs: [], name: "ApprovalCallerNotOwnerNorApproved", type: "error" },
    { inputs: [], name: "ApprovalQueryForNonexistentToken", type: "error" },
    { inputs: [], name: "BalanceQueryForZeroAddress", type: "error" },
    { inputs: [], name: "MintERC2309QuantityExceedsLimit", type: "error" },
    { inputs: [], name: "MintToZeroAddress", type: "error" },
    { inputs: [], name: "MintZeroQuantity", type: "error" },
    {
      inputs: [{ internalType: "address", name: "operator", type: "address" }],
      name: "OperatorNotAllowed",
      type: "error",
    },
    { inputs: [], name: "OwnerQueryForNonexistentToken", type: "error" },
    { inputs: [], name: "OwnershipNotInitializedForExtraData", type: "error" },
    { inputs: [], name: "TransferCallerNotOwnerNorApproved", type: "error" },
    { inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
    {
      inputs: [],
      name: "TransferToNonERC721ReceiverImplementer",
      type: "error",
    },
    { inputs: [], name: "TransferToZeroAddress", type: "error" },
    { inputs: [], name: "URIQueryForNonexistentToken", type: "error" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "approved",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "fromTokenId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "toTokenId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
      ],
      name: "ConsecutiveTransfer",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        { internalType: "address[]", name: "receivers", type: "address[]" },
      ],
      name: "MassAirdrop",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "OPERATOR_FILTER_REGISTRY",
      outputs: [
        {
          internalType: "contract IOperatorFilterRegistry",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_mintAmount", type: "uint256" },
        { internalType: "address", name: "_receiver", type: "address" },
      ],
      name: "OwnerMint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_mintAmount", type: "uint256" },
      ],
      name: "PublicMint",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "getApproved",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "hiddenMetadataUri",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "operator", type: "address" },
      ],
      name: "isApprovedForAll",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "maxLimitPerWallet",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "maxMintAmountPerTx",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "ownerOf",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "price",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "publicMintCount",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "publicMinted",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "publicSale",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "revealed",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
        { internalType: "bytes", name: "data", type: "bytes" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "operator", type: "address" },
        { internalType: "bool", name: "approved", type: "bool" },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "string", name: "_hiddenMetadataUri", type: "string" },
      ],
      name: "setHiddenMetadataUri",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_maxMintAmountPerTx",
          type: "uint256",
        },
      ],
      name: "setMaxMintAmountPerTx",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_price", type: "uint256" }],
      name: "setPrice",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bool", name: "_state", type: "bool" }],
      name: "setRevealed",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "string", name: "_uriSuffix", type: "string" }],
      name: "setUriSuffix",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_maxLimitPerWallet",
          type: "uint256",
        },
      ],
      name: "setmaxLimitPerWallet",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bool", name: "_publicSale", type: "bool" }],
      name: "setpublicSale",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_supplyLimit", type: "uint256" },
      ],
      name: "setsupplyLimit",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "string", name: "_uri", type: "string" }],
      name: "seturi",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "supplyLimit",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
      name: "supportsInterface",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
      name: "tokenURI",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "tokensOfOwner",
      outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "uriSuffix",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const { user } = useMoralis();

  async function MintNow() {
    const web3 = await Moralis.enableWeb3();

    let costoptions = {
      contractAddress: "0xb224C08AfB7cF3f2F5F3C634ed7407752d470BEb",

      functionName: "PublicMint",

      abi: ABI,

      msgValue: Moralis.Units.ETH(0.005 * numb),

      params: {
        _mintAmount: numb,
      },
    };

    let balance = await Moralis.executeFunction(costoptions);
  }

  return (
    <>
    <div className="body">
    
    {/* <div className="min-h-screen h-full w-full overflow-hidden flex flex-col items-center justify-center bg-brand-background bg-b">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center h-full w-full px-2 md:px-10">
          <div className="relative z-1 md:max-w-3xl w-full bg-gray-900/90 filter backdrop-blur-sm py-4 rounded-md px-2 md:px-10 flex flex-col items-center">
            <div className="flex  md:flex-row md:space-x-14 w-full mt-10 md:mt-14 db">
              <div className="relative w-full">
                <img
                  src={Image}
                  className="object-cover w-full sm:h-[280px] md:w-[250px] rounded-md"
                />
              </div>

              <div className="flex flex-col items-center w-full px-4  md:mt-0">
                <div className="font-coiny flex items-center justify-between pmb">
                  <button
                    className="minus-icon cursor-pointer minu-bg"
                    onClick={(e) => {
                      e.stopPropagation();
                      setNumb(numb - 1);
                    }}
                    disabled={numb === 0}
                  >
                    <MinusIcon />
                  </button>
                  <input
                    type="text"
                    className="txt cleanbtn  input-bg items-center justify-center text-center"
                    value={numb}
                    disabled={true}
                    placeholder="0"
                  />
                  <button
                    className="plus-icon cursor-pointer plus-bg"
                    onClick={(e) => {
                      e.stopPropagation();
                      setNumb(numb + 1);
                    }}
                  >
                    <PlusIcon />
                  </button>
                </div>

                <p className="text-sm text-pink-200 tracking-widest mt-3">
                  Max Mint Amount: 5
                </p>

                <div className="border-t border-b py-4 mt-16 ">
                  <div className="w-full text-l font-coiny flex items-center justify-between text-brand-yellow yellow">
                    <p>Per Item</p>

                    <div className="flex items-center space-x-3 m-value yellow">
                      <p>{Number.parseFloat(0.005 * numb).toFixed(3)} ETH</p>{" "}
                      <span className="text-gray-400">+ GAS</span>
                    </div>
                  </div>
                </div>
                <button
                  className="menu-item btn button mint-btn"
                  onClick={MintNow}
                >
                  Mint
                </button>
              </div>
            </div>

            <div className="border-t border-gray-800 flex flex-col items-center mt-10 py-2 w-full">
              <h3 className="font-coiny text-2xl text-brand-pink uppercase mt-6 ca">
                Contract Address
              </h3>
              <a
                href="https://etherscan.io/address/0xb224C08AfB7cF3f2F5F3C634ed7407752d470BEb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 mt-4"
              > */}
                {/* <span className="break-all ...">
                  0xb224C08AfB7cF3f2F5F3C634ed7407752d470BEb
                </span> */}
              {/* </a>
            </div>
          </div>
        </div>
      </div>
    </div> */}


<h1   className="faq">Mint Your SkyFlyPie</h1>
<div className="ifram">
{/* <iframe src="https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/erc721.html?contract=0x62d3bcfB8688AC5db360D8bADE3c41dB14204389&chainId=80001&theme=dark&primaryColor=orange" width="600px" height="600px" style={{maxWidth: '100%'}} frameBorder={0} /> */}
{/* <iframe
src="https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/erc721.html?contract=0x1b5abBA5fc616322da9c8B4c0721ed850D036C77&chainId=1&theme=dark&primaryColor=teal"
width="600px"
height="600px"
style="max-width:100%;"
frameborder="0"
></iframe> */}
      <iframe src="https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/erc721.html?contract=0x1b5abBA5fc616322da9c8B4c0721ed850D036C77&chainId=1&theme=dark&primaryColor=teal" width="600px" height="600px" style={{maxWidth: '100%'}} frameBorder={0} />
</div>


<h1   className="faq">FAQS</h1>
    <div className="accorditions">

<div className="first-accordition">
<Accordion
          title="nFt iNsPiRaTionS?"
          content=" <p>aRt bY cRypTopUnkS uTiLiTy bY BaYC</p>
          </br>"
        />
</div>

<Accordion
          className="accordition"
          title="wEN miNt dAtE?"
          content=" <p>13.01.23 iF tHere aRe nO gLitChes</p>
          </br>
         "
        />


<Accordion
          className="accordition"
          title="aMouNt fOr miNtiNg?"
          content=" <p>8,888 tO bE miNteD, mAx 8 eAcH</p>
          </br>"
        />

<Accordion
          className="accordition"
          title="cOnTraCt tyPe?"
          content=" <p>oF cOUrSe iTs 721-a tO saVe gaS</p>
          </br>
         "
        />

<Accordion
          className="accordition"
          title="uTiLiTY?"
          content=" <p>mAyBe aDVeNTuRe gAthEriNGs</p>
          </br>
         "
        />

        
<Accordion
          className="accordition"
          title="miNt pRiCes?"
          content=" <p>0.02 fOr cOmmuNiTy & fReE miNt oN sKyLisT</p>
          </br>
         "
        />
        
    </div>

    <h1   className="faq">About Us</h1>
    <HeroSection />
    </div>

    <div className="footer-component">
    <Footer/>
    </div>

    </>
  );
};
