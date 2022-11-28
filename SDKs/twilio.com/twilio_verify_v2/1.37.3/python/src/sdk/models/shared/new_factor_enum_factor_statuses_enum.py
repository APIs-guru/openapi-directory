from dataclasses import dataclass, field
from enum import Enum

class NewFactorEnumFactorStatusesEnum(str, Enum):
    UNVERIFIED = "unverified"
    VERIFIED = "verified"

