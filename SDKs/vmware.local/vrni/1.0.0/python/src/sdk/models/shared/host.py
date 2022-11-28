from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Host:
    cluster: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    connection_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_state') }})
    datastores: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastores') }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_id') }})
    entity_type: Optional[EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    maintenance_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenance_mode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nsx_manager: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nsx_manager') }})
    service_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_tag') }})
    vcenter_manager: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcenter_manager') }})
    vendor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendor_id') }})
    vm_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vm_count') }})
    vmknics: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmknics') }})
    
