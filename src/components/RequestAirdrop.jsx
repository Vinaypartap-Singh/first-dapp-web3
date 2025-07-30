import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export default function RequestAirdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [amount, setAmount] = useState("");

  function requestAirdrop() {
    const publicKey = wallet.publicKey;
    connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL);
  }

  return (
    <div>
      <input type="text" onChange={(e) => setAmount(e.target.value)} />
      <button onClick={requestAirdrop}>Airdrop</button>
    </div>
  );
}
