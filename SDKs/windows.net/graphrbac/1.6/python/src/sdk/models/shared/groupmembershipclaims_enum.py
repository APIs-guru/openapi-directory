from dataclasses import dataclass, field
from enum import Enum

class GroupMembershipClaimsEnum(str, Enum):
    NONE = "None"
    SECURITY_GROUP = "SecurityGroup"
    ALL = "All"

