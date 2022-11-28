from dataclasses import dataclass, field
from enum import Enum

class ConferenceParticipantEnumCallTypeEnum(str, Enum):
    CARRIER = "carrier"
    CLIENT = "client"
    SIP = "sip"

