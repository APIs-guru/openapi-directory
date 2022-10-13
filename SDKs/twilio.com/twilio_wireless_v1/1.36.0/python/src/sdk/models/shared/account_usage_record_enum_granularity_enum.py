from dataclasses import dataclass, field
from typing import Enum

class AccountUsageRecordEnumGranularityEnum(str, Enum):
    HOURLY = "hourly"
    DAILY = "daily"
    ALL = "all"

