from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Cluster:
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_id') }})
    entity_type: Optional[EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nsx_manager: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nsx_manager') }})
    num_cpu_cores: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_cpu_cores') }})
    num_datastores: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_datastores') }})
    num_hosts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_hosts') }})
    total_cpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_cpus') }})
    total_memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_memory') }})
    vcenter_manager: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcenter_manager') }})
    vendor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendor_id') }})
    
