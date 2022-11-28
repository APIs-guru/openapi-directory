from dataclasses import dataclass, field
from enum import Enum

class MetricTypeEnum(str, Enum):
    COUNTER = "COUNTER"
    GAUGE = "GAUGE"
    TIMER = "TIMER"

