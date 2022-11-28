from dataclasses import dataclass, field
from enum import Enum

class PayoutTypeEnum(str, Enum):
    STANDARD = "STANDARD"
    AS = "AS"
    ON_BEHALF_OF = "ON_BEHALF_OF"

