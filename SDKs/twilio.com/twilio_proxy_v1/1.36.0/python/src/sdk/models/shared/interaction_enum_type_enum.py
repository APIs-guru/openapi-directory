from dataclasses import dataclass, field
from typing import Enum

class InteractionEnumTypeEnum(str, Enum):
    MESSAGE = "message"
    VOICE = "voice"
    UNKNOWN = "unknown"

