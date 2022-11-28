from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PayorCreateAPIKeyRequestRolesEnum(str, Enum):
    PAYOR_ADMIN = "payor.admin"
    PAYOR_SUPPORT = "payor.support"


@dataclass_json
@dataclass
class PayorCreateAPIKeyRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    roles: List[PayorCreateAPIKeyRequestRolesEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
