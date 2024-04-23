import { createSlice } from "@reduxjs/toolkit";

const chainSlice = createSlice({
  name: "chain",

  initialState: {
    currentChain: {
      chainId: 10,
      chainName: "Optimism",
      isBase: true,
      rpcUrl: "https://optimism-rpc.publicnode.com",
      convert_id: "2781",
      id: "1027",
      symbol: "ETH",
      logo: "/eth-logo.svg",
      addresses: {
        Valerium: "0xE2863dBFFC36100cd77160d74F4bb97344E0AD42",
        ValeriumForwarder: "0x40C92d2E370b3d3944fDd90c922a407F02D286d1",
        FactoryForwarder: "0x44950f083691828A07c17d2A927B435e8B272F6D",
        ValeriumProxyFactory: "0x0B62BDA8EcE17AFfa7adAe16bBaBBC8584A30016",
        ValeriumVault: "0x1275917daAE6389C61c7B1E8199724D0b46Ed10f",
        PasswordVerifier: "0x0c17B9e142a0DDb42f075b0E2f1988691ea1d75a",
        SignatureVerifier: "0xC4e20B3BD1922A02c6DAC500De5754E3CC4046BB",
        ValeriumGasTank: "0xd276eC25c2C4670B067b9CF726b7BfCADB191107",
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
          address: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
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
