from dataclasses import dataclass, field
from typing import Enum

class MessageInteractionEnumTypeEnum(str, Enum):
    MESSAGE = "message"
    VOICE = "voice"
    UNKNOWN = "unknown"

