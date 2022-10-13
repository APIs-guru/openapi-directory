from dataclasses import dataclass, field
from typing import Enum

class ConferenceParticipantEnumJitterBufferSizeEnum(str, Enum):
    LARGE = "large"
    SMALL = "small"
    MEDIUM = "medium"
    OFF = "off"

