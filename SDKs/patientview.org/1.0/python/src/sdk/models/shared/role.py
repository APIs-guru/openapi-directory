from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class RoleNameEnum(str, Enum):
    PATIENT = "PATIENT"
    UNIT_ADMIN = "UNIT_ADMIN"
    STAFF_ADMIN = "STAFF_ADMIN"
    DISEASE_GROUP_ADMIN = "DISEASE_GROUP_ADMIN"
    SPECIALTY_ADMIN = "SPECIALTY_ADMIN"
    GLOBAL_ADMIN = "GLOBAL_ADMIN"
    GP_ADMIN = "GP_ADMIN"
    MEMBER = "MEMBER"
    PUBLIC = "PUBLIC"
    UNIT_ADMIN_API = "UNIT_ADMIN_API"
    IMPORTER = "IMPORTER"


@dataclass
class Role:
    description: Optional[str] = field(default=None)
    id: Optional[int] = field(default=None)
    name: Optional[RoleNameEnum] = field(default=None)
    visible: Optional[bool] = field(default=None)
    
