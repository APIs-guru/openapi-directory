from dataclasses import dataclass, field
from typing import Enum

class UserChannelEnumNotificationLevelEnum(str, Enum):
    DEFAULT = "default"
    MUTED = "muted"

