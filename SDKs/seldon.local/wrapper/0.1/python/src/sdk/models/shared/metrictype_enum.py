from dataclasses import dataclass, field
from typing import Enum

class MetricTypeEnum(str, Enum):
    COUNTER = "COUNTER"
    GAUGE = "GAUGE"
    TIMER = "TIMER"

