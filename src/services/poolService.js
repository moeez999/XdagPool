// XDagger Pool API Service

const API_URL = "https://mining-data-display-k13r.onrender.com/api/hashrate";

export async function fetchPoolConfig() {
  const requestData = {
    jsonrpc: "2.0",
    method: "xdag_poolConfig",
    params: [],
    id: 1,
  };
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestData),
  });
  const data = await res.json();
  if (data.result) return data.result;
  throw new Error("Invalid response from server.");
}

export async function fetchPoolWorkers() {
  const requestData = {
    jsonrpc: "2.0",
    method: "xdag_getPoolWorkers",
    params: [],
    id: 1,
  };
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestData),
  });
  const data = await res.json();
  if (data.result) return data.result;
  throw new Error("Invalid response from server.");
}

export async function fetchPoolHashrate() {
  const requestData = {
    jsonrpc: "2.0",
    method: "xdag_poolHashrate",
    params: [],
    id: 1,
  };
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestData),
  });
  const data = await res.json();
  if (data.result) return data.result;
  throw new Error("Invalid response from server.");
}

export async function fetchPoolVersion() {
  const requestData = {
    jsonrpc: "2.0",
    method: "xdag_poolVersion",
    params: [""],
    id: 1,
  };
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestData),
  });
  const data = await res.json();
  if (data.result) return data.result;
  throw new Error("Invalid response from server.");
}
