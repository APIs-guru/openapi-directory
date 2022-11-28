from dataclasses import dataclass, field
from enum import Enum

class InteractionChannelEnumStatusEnum(str, Enum):
    CLOSED = "closed"
    WRAPUP = "wrapup"

