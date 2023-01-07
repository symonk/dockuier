from fastapi import FastAPI

app = FastAPI(title="Format")


@app.get("/")
async def root():
    """An entrypoint response for now."""
    return {"Hello": "World"}
