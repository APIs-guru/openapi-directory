from dataclasses import dataclass, field
from enum import Enum

class UsageTriggerEnumRecurringEnum(str, Enum):
    DAILY = "daily"
    MONTHLY = "monthly"
    YEARLY = "yearly"
    ALLTIME = "alltime"

