from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VCenterManager:
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_id') }})
    entity_type: Optional[EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    fqdn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fqdn') }})
    ip_address: Optional[IPV4Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nsx_manager: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nsx_manager') }})
    vm: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vm') }})
    
