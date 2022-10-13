from dataclasses import dataclass, field
from typing import Enum

class UsageRecordEnumGranularityEnum(str, Enum):
    HOUR = "hour"
    DAY = "day"
    ALL = "all"

