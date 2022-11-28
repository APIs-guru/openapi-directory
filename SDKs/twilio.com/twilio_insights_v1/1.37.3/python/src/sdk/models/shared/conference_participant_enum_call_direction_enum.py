from dataclasses import dataclass, field
from enum import Enum

class ConferenceParticipantEnumCallDirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"

