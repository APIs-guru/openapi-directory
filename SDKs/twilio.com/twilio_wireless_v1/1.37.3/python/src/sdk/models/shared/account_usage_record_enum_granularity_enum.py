from dataclasses import dataclass, field
from enum import Enum

class AccountUsageRecordEnumGranularityEnum(str, Enum):
    HOURLY = "hourly"
    DAILY = "daily"
    ALL = "all"

