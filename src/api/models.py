from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Boolean
from sqlalchemy.orm import Mapped, mapped_column

db = SQLAlchemy()

class User(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)
    firstname:Mapped[str] = mapped_column(String(80))
    lastname:Mapped[str] = mapped_column(String(80))
    password: Mapped[str] = mapped_column(nullable=False)
    salt: Mapped[str] = mapped_column(String(200),nullable=False, default=1)
    is_active: Mapped[bool] = mapped_column(Boolean(), nullable=False , default=True)


    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "firstName": self.firstname,
            "lastName":self.lastname
            # do not serialize the password, its a security breach
        }