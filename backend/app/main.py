from fastapi import FastAPI

from .response_classes import PrettyJson
import docker

app = FastAPI(title="Dockuier")


@app.get("/")
async def root():
    """A root handler."""
    return {"hello": "world"}


@app.get("/api/containers", response_class=PrettyJson)
async def containers(real: bool=True):
    """Retrieve information for all running containers.  Return a dummy mock container json
    for now."""
    row = {
        "container_name": "Mock Container",
        "container_image": "MockImage:0.13.5",
        "running_for": "18.052",
        "created": "4 days ago",
        "ports": ["79:80", "3000:3000"],
    }
    if not real:
        return [row for _ in range(5)]
    return docker.from_env().containers(all=False)


