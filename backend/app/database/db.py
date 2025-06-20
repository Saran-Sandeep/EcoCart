from sqlmodel import create_engine, SQLModel, Field

class User(SQLModel, table=True):
    id: int = Field(primary_key=True, index=True)
    name: str = Field(index=True)
    age: int = Field(default=0, index=True)
    