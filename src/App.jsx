import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { useState } from "react";
import "./App.css";
import RequestAirdrop from "./components/RequestAirdrop";
import SendToken from "./components/SendToken";
import ShowBalance from "./components/ShowBalance";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <WalletMultiButton />
            <WalletDisconnectButton />
            <RequestAirdrop />
            <ShowBalance />
            <SendToken />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default App;
