from dataclasses import dataclass, field
from enum import Enum

class MessageEnumDirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND_API = "outbound-api"
    OUTBOUND_CALL = "outbound-call"
    OUTBOUND_REPLY = "outbound-reply"

