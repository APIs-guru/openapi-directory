from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BaseService:
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_id') }})
    entity_type: Optional[EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    port_ranges: Optional[List[PortRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port_ranges') }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    
