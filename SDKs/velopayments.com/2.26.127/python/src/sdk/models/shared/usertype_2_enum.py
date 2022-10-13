from dataclasses import dataclass, field
from typing import Enum

class UserType2Enum(str, Enum):
    BACKOFFICE = "BACKOFFICE"
    PAYOR = "PAYOR"
    PAYEE = "PAYEE"

