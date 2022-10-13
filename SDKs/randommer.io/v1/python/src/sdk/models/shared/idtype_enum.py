from dataclasses import dataclass, field
from typing import Enum

class IDTypeEnum(str, Enum):
    VAT = "VAT"
    SSN = "SSN"

