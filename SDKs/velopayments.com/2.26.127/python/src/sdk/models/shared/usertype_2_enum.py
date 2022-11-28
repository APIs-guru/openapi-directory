from dataclasses import dataclass, field
from enum import Enum

class UserType2Enum(str, Enum):
    BACKOFFICE = "BACKOFFICE"
    PAYOR = "PAYOR"
    PAYEE = "PAYEE"

