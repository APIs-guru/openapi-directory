from dataclasses import dataclass, field
from typing import Enum

class MetricEnumStreamDirectionEnum(str, Enum):
    UNKNOWN = "unknown"
    INBOUND = "inbound"
    OUTBOUND = "outbound"
    BOTH = "both"

