from dataclasses import dataclass, field
from typing import Enum

class SessionEnumModeEnum(str, Enum):
    MESSAGE_ONLY = "message-only"
    VOICE_ONLY = "voice-only"
    VOICE_AND_MESSAGE = "voice-and-message"

