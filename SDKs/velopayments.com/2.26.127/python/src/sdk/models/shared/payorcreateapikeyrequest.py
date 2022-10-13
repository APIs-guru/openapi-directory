from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class PayorCreateAPIKeyRequestRolesEnum(str, Enum):
    PAYOR_ADMIN = "payor.admin"
    PAYOR_SUPPORT = "payor.support"


@dataclass_json
@dataclass
class PayorCreateAPIKeyRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    roles: List[PayorCreateAPIKeyRequestRolesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    
