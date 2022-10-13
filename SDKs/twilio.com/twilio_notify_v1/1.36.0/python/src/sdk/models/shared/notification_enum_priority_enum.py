from dataclasses import dataclass, field
from typing import Enum

class NotificationEnumPriorityEnum(str, Enum):
    HIGH = "high"
    LOW = "low"

