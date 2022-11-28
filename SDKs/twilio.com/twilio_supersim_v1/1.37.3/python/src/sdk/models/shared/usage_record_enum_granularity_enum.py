from dataclasses import dataclass, field
from enum import Enum

class UsageRecordEnumGranularityEnum(str, Enum):
    HOUR = "hour"
    DAY = "day"
    ALL = "all"

