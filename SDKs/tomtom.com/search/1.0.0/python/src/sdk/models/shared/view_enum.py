from dataclasses import dataclass, field
from typing import Enum

class ViewEnum(str, Enum):
    UNIFIED = "Unified"
    IN = "IN"
    PK = "PK"
    IL = "IL"
    MA = "MA"

