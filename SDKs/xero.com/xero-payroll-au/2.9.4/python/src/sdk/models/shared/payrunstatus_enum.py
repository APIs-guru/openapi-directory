from dataclasses import dataclass, field
from enum import Enum

class PayRunStatusEnum(str, Enum):
    DRAFT = "DRAFT"
    POSTED = "POSTED"

