from dataclasses import dataclass, field
from typing import Enum

class UsageRecordEnumGranularityEnum(str, Enum):
    HOURLY = "hourly"
    DAILY = "daily"
    ALL = "all"

