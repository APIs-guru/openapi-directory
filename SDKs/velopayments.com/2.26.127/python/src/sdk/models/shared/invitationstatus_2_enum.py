from dataclasses import dataclass, field
from enum import Enum

class InvitationStatus2Enum(str, Enum):
    ACCEPTED = "ACCEPTED"
    PENDING = "PENDING"
    DECLINED = "DECLINED"

