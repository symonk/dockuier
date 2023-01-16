import docker
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .response_classes import PrettyJson

origins = ["http://localhost:8080", "http://localhost:3000"]

app = FastAPI(title="Dockuier")
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/containers", response_class=PrettyJson)
async def containers(running: bool = True):
    """Retrieve the running docker container information"""
    return docker.from_env().containers(all=not running)
