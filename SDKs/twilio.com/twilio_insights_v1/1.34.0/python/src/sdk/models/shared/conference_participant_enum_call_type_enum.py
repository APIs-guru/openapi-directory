from dataclasses import dataclass, field
from typing import Enum

class ConferenceParticipantEnumCallTypeEnum(str, Enum):
    CARRIER = "carrier"
    CLIENT = "client"
    SIP = "sip"

