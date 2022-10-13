from dataclasses import dataclass, field
from typing import Enum

class UserConversationEnumNotificationLevelEnum(str, Enum):
    DEFAULT = "default"
    MUTED = "muted"

