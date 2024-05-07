import { createSlice } from "@reduxjs/toolkit";

const chainSlice = createSlice({
  name: "chain",

  initialState: {
    currentChain: {
      chainId: 1891,
      chainName: "LightLink",
      isBase: true,
      rpcUrl: "https://replicator.pegasus.lightlink.io/rpc/v1",
      convert_id: "2781",
      id: "1027",
      symbol: "ETH",
      logo: "/eth-logo.svg",
      addresses: {
        Valerium: "0x403C415b937670D1cE5990085D1d2a4bfBcD963d",
        ValeriumForwarder: "0x317EA248E82581b42cbec0969e21EB5cd66F0685",
        FactoryForwarder: "0xB182B9d882BD096dA31BCEA102B87B3649857f98",
        ValeriumProxyFactory: "0x9b6f84C2BCd64616dB448D8ED82038cC07E1fe59",
        ValeriumVault: "0x1FdD0B22E4208F6CeE8F8C1Bdbf28bBBc359A86F",
        PasswordVerifier: "0x3D3851032b6485dD65AdBB45bA37b18615006493",
        SignatureVerifier: "0x62CB235Cf18Af7b62B918d93DA89212bc89daFdc",
        ValeriumGasTank: "0x51781cc1439BD05a85185C8c8CEc979b263236e3",
      },
      style: {
        baseTextColor: "#FFFFFF",
        colorDark: "#FF0420",
        colorLight: "#FF0420",
        gradientColorDark:
          "linear-gradient(93deg, rgba(255, 4, 32, 0.40) 0%, rgba(153, 2, 19, 0.40) 100%)",
        gradientColorLight:
          "linear-gradient(93deg, rgba(255, 4, 32, 0.80) 0%, rgba(153, 2, 19, 0.80) 100%)",
        backgroundColorDark: "rgba(255, 4, 32, 0.40)",
        backgroundColorLight: "rgba(255, 4, 32, 0.20)",
        backgroundShadowEffect:
          "linear-gradient(40deg, rgba(255, 255, 255, 0.00) 60%, rgba(255, 74, 94, 0.00) 60%, rgba(255, 4, 32, 0.80) 100%)",
        logo: "/optimism-logo.svg",
      },
      tokens: [
        {
          name: "ETH",
          symbol: "ETH",
          address: null,
          convert_id: "1027",
          usd_id: "2781",
          decimals: 18,
          logo: "/eth-logo.svg",
        },
        {
          name: "USDC",
          symbol: "USDC",
          address: "0x3cf2c147d43C98Fa96d267572e3FD44A4D3940d4",
          convert_id: "3408",
          usd_id: "2781",
          decimals: 6,
          logo: "/usdc-logo.svg",
        },
      ],
    },
  },

  reducers: {
    setCurrentChain: (state, action) => {
      state.currentChain = action.payload;
    },
  },
});

export const { setCurrentChain } = chainSlice.actions;

export default chainSlice.reducer;
