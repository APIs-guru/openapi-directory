from dataclasses import dataclass, field
from typing import Enum

class InvitationStatus2Enum(str, Enum):
    ACCEPTED = "ACCEPTED"
    PENDING = "PENDING"
    DECLINED = "DECLINED"

