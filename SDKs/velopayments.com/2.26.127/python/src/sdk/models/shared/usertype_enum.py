from dataclasses import dataclass, field
from enum import Enum

class UserTypeEnum(str, Enum):
    BACKOFFICE = "BACKOFFICE"
    PAYOR = "PAYOR"
    PAYEE = "PAYEE"

