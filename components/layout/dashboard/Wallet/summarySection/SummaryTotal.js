"use client";

import { useSelector } from "react-redux";

import { Loader2 } from "lucide-react";
import { formatAmount } from "@/utils/formatAmount";

const SummaryTotal = ({
  token,
  usdToggle,
  isLoading,
  gas,
  amount,
  isGasless = false,
}) => {
  const txProof = useSelector((state) => state.proof.txProof);
  const tokenConversionData = useSelector(
    (state) => state.user.tokenConversionData
  );

  const currentTokenConversion = token[0]
    ? tokenConversionData
      ? 1 /
          tokenConversionData.find(
            (selectedToken) => selectedToken.address === token[0].address
          ).usdValue || 1
      : 0
    : 0;

  return (
    <>
      <div>
        <div className="flex w-full justify-between">
          <p className="text-base font-normal text-text-gray">
            Total Amount to Pay:
          </p>

          {!isGasless && (
            <p className="text-2.5xl font-bold text-black">
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  {txProof && token[0].address === token[1].address
                    ? usdToggle
                      ? (
                          amount / Number(currentTokenConversion) +
                          gas / 10 ** 18
                        ).toFixed(6)
                      : (Number(amount) + gas / 10 ** 18).toFixed(6)
                    : usdToggle
                    ? formatAmount(amount / Number(currentTokenConversion))
                    : amount || "0.00"}
                  <span> {token[0]?.symbol}</span>
                </>
              )}
            </p>
          )}
          {isGasless && (
            <p className="text-2.5xl font-bold text-black">
              {usdToggle
                ? formatAmount(amount / Number(currentTokenConversion))
                : amount || "0.00"}
              <span> {token[0]?.symbol}</span>
            </p>
          )}
        </div>

        {!isGasless &&
          txProof &&
          token[0].address !== token[1].address &&
          !isLoading && (
            <div className="flex w-full flex-row-reverse justify-between">
              <p className="text-text-gray">
                {!isLoading && usdToggle
                  ? "+ " + (gas / 10 ** 18).toFixed(parseInt(6))
                  : "+ " + (gas / 10 ** 18).toFixed(6)}

                <span> {token[1]?.symbol}</span>
              </p>
            </div>
          )}
      </div>
    </>
  );
};

export default SummaryTotal;
