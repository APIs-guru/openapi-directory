from dataclasses import dataclass, field
from enum import Enum

class UserConversationEnumNotificationLevelEnum(str, Enum):
    DEFAULT = "default"
    MUTED = "muted"

