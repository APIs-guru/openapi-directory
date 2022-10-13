from dataclasses import dataclass, field
from typing import Enum

class UserChannelEnumChannelStatusEnum(str, Enum):
    JOINED = "joined"
    INVITED = "invited"
    NOT_PARTICIPATING = "not_participating"

