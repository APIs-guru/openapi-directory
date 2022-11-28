from dataclasses import dataclass, field
from enum import Enum

class ServiceRoleEnumRoleTypeEnum(str, Enum):
    CONVERSATION = "conversation"
    SERVICE = "service"

