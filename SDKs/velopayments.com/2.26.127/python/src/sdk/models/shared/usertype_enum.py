from dataclasses import dataclass, field
from typing import Enum

class UserTypeEnum(str, Enum):
    BACKOFFICE = "BACKOFFICE"
    PAYOR = "PAYOR"
    PAYEE = "PAYEE"

