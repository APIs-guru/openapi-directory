from dataclasses import dataclass, field
from typing import Enum

class PayRunStatusEnum(str, Enum):
    DRAFT = "DRAFT"
    POSTED = "POSTED"

