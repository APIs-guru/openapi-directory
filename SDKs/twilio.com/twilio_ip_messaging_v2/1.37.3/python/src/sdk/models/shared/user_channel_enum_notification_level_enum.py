from dataclasses import dataclass, field
from enum import Enum

class UserChannelEnumNotificationLevelEnum(str, Enum):
    DEFAULT = "default"
    MUTED = "muted"

