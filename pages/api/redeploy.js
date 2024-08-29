export default async function redeploy(req, res){
    // console.log('api called')
    // res.status(200).json({data: 'data'})
    try {
          const result = await fetch("https://api.vercel.com/v13/deployments?forceNew=0&skipAutoDetectionConfirmation=0&slug=SOME_STRING_VALUE&teamId=SOME_STRING_VALUE", {
          "body": {
            "name": "preview",
            "target": "production",
            "gitSource": {
              "owner": "18-28",
              "ref": "main",
              "repoId": "817281899",
              "type": "github"
            },
          },
          "headers": {
            "Authorization": "Bearer I4R2l0PlQBCxTSCTiOxDfe65",
            "Content-Type": "application/json"
          },
          "method": "post"
        });


          const data = await result.json();
          res.status(200).json(data);
        

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

