from dataclasses import dataclass, field
from typing import Enum

class PayeeTypeEnum(str, Enum):
    INDIVIDUAL = "Individual"
    COMPANY = "Company"

