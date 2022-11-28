from dataclasses import dataclass, field
from enum import Enum

class CalendarTypeEnum(str, Enum):
    WEEKLY = "WEEKLY"
    FORTNIGHTLY = "FORTNIGHTLY"
    FOURWEEKLY = "FOURWEEKLY"
    MONTHLY = "MONTHLY"
    TWICEMONTHLY = "TWICEMONTHLY"
    QUARTERLY = "QUARTERLY"

