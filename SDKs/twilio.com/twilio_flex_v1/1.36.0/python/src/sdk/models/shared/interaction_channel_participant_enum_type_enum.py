from dataclasses import dataclass, field
from typing import Enum

class InteractionChannelParticipantEnumTypeEnum(str, Enum):
    SUPERVISOR = "supervisor"
    CUSTOMER = "customer"
    EXTERNAL = "external"
    AGENT = "agent"
    UNKNOWN = "unknown"

