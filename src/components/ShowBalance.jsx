import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export default function ShowBalance() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState();

  useEffect(() => {
    async function getMeUserBalance() {
      const balance = await connection.getBalance(wallet.publicKey);
      setBalance(balance / LAMPORTS_PER_SOL);
    }

    getMeUserBalance();
  }, [wallet, connection]);

  return (
    <div>
      <h2>You account balance: {balance}</h2>
    </div>
  );
}
