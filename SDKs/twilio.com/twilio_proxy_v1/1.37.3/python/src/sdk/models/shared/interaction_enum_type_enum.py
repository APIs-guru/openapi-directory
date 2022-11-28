from dataclasses import dataclass, field
from enum import Enum

class InteractionEnumTypeEnum(str, Enum):
    MESSAGE = "message"
    VOICE = "voice"
    UNKNOWN = "unknown"

