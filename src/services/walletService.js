export async function fetchWalletStats(address) {
  const requestData = {
    jsonrpc: "2.0",
    method: "xdag_minerAccount",
    params: [address],
    id: 1,
  };
  const res = await fetch(
    "https://mining-data-display-k13r.onrender.com/api/hashrate",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    }
  );
  const data = await res.json();
  if (data.result) {
    return data.result;
  } else {
    throw new Error("Invalid response from server.");
  }
}
