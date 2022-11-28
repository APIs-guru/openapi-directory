from dataclasses import dataclass, field
from enum import Enum

class EventEnumTwilioEdgeEnum(str, Enum):
    UNKNOWN_EDGE = "unknown_edge"
    CARRIER_EDGE = "carrier_edge"
    SIP_EDGE = "sip_edge"
    SDK_EDGE = "sdk_edge"
    CLIENT_EDGE = "client_edge"

