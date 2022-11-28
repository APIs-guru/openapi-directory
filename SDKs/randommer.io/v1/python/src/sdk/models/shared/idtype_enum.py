from dataclasses import dataclass, field
from enum import Enum

class IDTypeEnum(str, Enum):
    VAT = "VAT"
    SSN = "SSN"

