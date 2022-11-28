from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BaseFirewallRule:
    action: Optional[FirewallActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    destination_any: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_any') }})
    destination_inversion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_inversion') }})
    destinations: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_id') }})
    entity_type: Optional[EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    port_ranges: Optional[List[PortRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port_ranges') }})
    rule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule_id') }})
    section_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('section_id') }})
    section_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('section_name') }})
    sequence_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequence_number') }})
    service_any: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_any') }})
    services: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    source_any: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_any') }})
    source_inversion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_inversion') }})
    sources: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
