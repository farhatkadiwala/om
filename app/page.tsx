// import { ReCaptchaProvider } from "next-recaptcha-v3";
import { DM_Sans } from "next/font/google";
import { Fuel } from "fuels";
import { FuelWalletConnector } from "@fuels/connectors";

const fuel = new Fuel({
  connectors: [new FuelWalletConnector()],
});

const profile = async () => {
  await fuel.selectConnector("Fuel Wallet");
  const connection = await fuel.connect();
  console.log(connection);
};

const dmsans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export default function Home() {
  return (
    <>
      <main className={`${dmsans.variable} font-sans`}>
        <div className="p-px bg-white rounded-lg flex-col justify-end items-end gap-2.5 inline-flex">
          <div className="p-2.5 bg-emerald-500 rounded-lg border border-zinc-800 justify-center items-center gap-2.5 inline-flex">
            <button className="text-black text-[15px] font-medium font-['DM Sans']">
              Connect Wallet
            </button>
          </div>
        </div>
        <div className="flex-col h-screen flex items-center justify-center gap-12">
          <div className="text-6xl">Claim Vada Pav tokens</div>
          <div className="flex-row inline-flex justify-center gap-4">
            <div className="text-black">
              <div className="w-[440px] p-px bg-white rounded-lg flex-col inline-flex">
                <input
                  type="text"
                  className="self-stretch p-2.5 bg-white rounded-lg border border-zinc-800"
                />
              </div>
            </div>
            <div className="p-px bg-white rounded-lg flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="p-2.5 bg-emerald-500 rounded-lg border border-zinc-800 justify-center items-center gap-2.5 inline-flex">
                <button className="text-black text-[15px] font-medium font-['DM Sans']">
                  Request tokens
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
