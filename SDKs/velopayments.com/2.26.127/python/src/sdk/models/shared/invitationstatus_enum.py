from dataclasses import dataclass, field
from enum import Enum

class InvitationStatusEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    PENDING = "PENDING"
    DECLINED = "DECLINED"

