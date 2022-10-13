from dataclasses import dataclass, field
from typing import Enum

class GroupMembershipClaimsEnum(str, Enum):
    NONE = "None"
    SECURITY_GROUP = "SecurityGroup"
    ALL = "All"

