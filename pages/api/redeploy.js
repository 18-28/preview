export default async function redeploy(req, res){
    try {
        const result = await fetch("https://api.vercel.com/v13/deployments", {
            method: "POST",
            headers: {
                "Authorization": "Bearer I4R2l0PlQBCxTSCTiOxDfe65",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
            name: "preview",
            target: "production",
            gitSource: {
                owner: "18-28",
                ref: "main",
                repoId: "817281899",
                type: "github"
            },
            }),
      });
        const data = await result.json();
        res.status(200).json(data);

  } catch (error) {
      return res.status(500).json({ error: error.message })
  }
}

