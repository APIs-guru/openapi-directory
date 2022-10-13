from dataclasses import dataclass, field
from typing import Enum

class ConferenceParticipantEnumCallDirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"

