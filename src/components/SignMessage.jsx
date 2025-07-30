import { ed25519 } from "@noble/curves/ed25519";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58";
import { useState } from "react";

export default function SignMessage() {
  const { publicKey, signMessage } = useWallet();
  const [message, setMessage] = useState();

  async function signMessageFunction() {
    if (!publicKey) return new Error("Wallet not connected");
    if (!signMessage) return new Error("Wallet does not support sign message");

    const encodedMessage = new TextEncoder().encode(message);
    const signature = await signMessage(encodedMessage);

    if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes()))
      throw new Error("Message Signature Invalid");

    alert("success");
    console.log(bs58.encode(signature));
  }

  return (
    <div>
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <button onClick={signMessageFunction}>Sign Message</button>
    </div>
  );
}
