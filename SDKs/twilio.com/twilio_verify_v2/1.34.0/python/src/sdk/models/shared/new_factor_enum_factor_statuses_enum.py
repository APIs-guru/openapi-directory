from dataclasses import dataclass, field
from typing import Enum

class NewFactorEnumFactorStatusesEnum(str, Enum):
    UNVERIFIED = "unverified"
    VERIFIED = "verified"

