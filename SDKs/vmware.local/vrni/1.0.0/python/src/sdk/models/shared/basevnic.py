from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BaseVnic:
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_id') }})
    entity_type: Optional[EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    ip_addresses: Optional[List[IPV4Address]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_addresses') }})
    layer2_network: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layer2_network') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    vlan: Optional[Vlan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    vm: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vm') }})
    
