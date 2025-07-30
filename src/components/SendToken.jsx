import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { useState } from "react";

export default function SendToken() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  async function sendToken() {
    const transaction = new Transaction();
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(to),
        lamports: amount * LAMPORTS_PER_SOL,
      })
    );

    await wallet.sendTransaction(transaction, connection);
    alert("amount sent");
  }

  return (
    <div>
      <h2>Send Token</h2>

      <input type="text" id="to" onChange={(e) => setTo(e.target.value)} />
      <input
        type="text"
        id="amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={sendToken}>Send Token</button>
    </div>
  );
}
