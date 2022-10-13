from dataclasses import dataclass, field
from typing import Enum

class RoleEnumRoleTypeEnum(str, Enum):
    CHANNEL = "channel"
    DEPLOYMENT = "deployment"

