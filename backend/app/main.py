from fastapi import FastAPI 

from .response_classes import PrettyJson
import docker

app = FastAPI(title="Dockuier")

@app.get("/api/containers", response_class=PrettyJson)
async def containers(running: bool = True):
    """Retrieve the running docker container information"""
    return docker.from_env().containers(all=not running)
