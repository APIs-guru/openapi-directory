from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SecurityTag:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    direct_security_groups: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direct_security_groups') }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_id') }})
    entity_type: Optional[EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nsx_manager: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nsx_manager') }})
    security_groups: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('security_groups') }})
    vendor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendor_id') }})
    
