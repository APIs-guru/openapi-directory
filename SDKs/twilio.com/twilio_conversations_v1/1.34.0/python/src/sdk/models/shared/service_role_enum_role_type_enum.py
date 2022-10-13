from dataclasses import dataclass, field
from typing import Enum

class ServiceRoleEnumRoleTypeEnum(str, Enum):
    CONVERSATION = "conversation"
    SERVICE = "service"

