from dataclasses import dataclass, field
from typing import Enum

class UsageTriggerEnumRecurringEnum(str, Enum):
    DAILY = "daily"
    MONTHLY = "monthly"
    YEARLY = "yearly"
    ALLTIME = "alltime"

