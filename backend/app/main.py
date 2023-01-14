from fastapi import FastAPI 

from .response_classes import PrettyJson
import docker

app = FastAPI(title="Dockuier")

@app.get("/api/containers", response_class=PrettyJson)
async def containers():
    """Retrieve information for all running containers.  Return a dummy mock container json
    for now."""
    return docker.from_env().containers(all=False)
