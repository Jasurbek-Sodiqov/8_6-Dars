async function GetToken() {
    const resp = await fetch(import.meta.env.VITE_API_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(
          import.meta.env.VITE_CLINET_ID + ":" + import.meta.env.VITE_SECRET_KEY
        )}`,
      },
      body: "grant_type=client_credentials",
    });
    const auth = await resp.json();
    console.log(auth);
  }
  
  export { GetToken };
  