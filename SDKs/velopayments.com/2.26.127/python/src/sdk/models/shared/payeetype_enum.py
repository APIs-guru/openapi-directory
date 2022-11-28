from dataclasses import dataclass, field
from enum import Enum

class PayeeTypeEnum(str, Enum):
    INDIVIDUAL = "Individual"
    COMPANY = "Company"

