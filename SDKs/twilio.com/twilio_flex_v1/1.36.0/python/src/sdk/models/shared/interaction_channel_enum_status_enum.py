from dataclasses import dataclass, field
from typing import Enum

class InteractionChannelEnumStatusEnum(str, Enum):
    CLOSED = "closed"
    WRAPUP = "wrapup"

