from fastapi import FastAPI

app = FastAPI(title="Dockuier")


@app.get("/")
async def root():
    """An entrypoint response for now."""
    return {"Hello": "World"}
