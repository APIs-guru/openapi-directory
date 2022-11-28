from dataclasses import dataclass, field
from enum import Enum

class NotificationEnumPriorityEnum(str, Enum):
    HIGH = "high"
    LOW = "low"

