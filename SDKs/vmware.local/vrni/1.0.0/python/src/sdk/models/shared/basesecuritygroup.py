from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BaseSecurityGroup:
    direct_destination_rules: Optional[List[RuleSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direct_destination_rules') }})
    direct_members: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direct_members') }})
    direct_source_rules: Optional[List[RuleSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direct_source_rules') }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_id') }})
    entity_type: Optional[EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    excluded_members: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excluded_members') }})
    indirect_destination_rules: Optional[List[RuleSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indirect_destination_rules') }})
    indirect_source_rules: Optional[List[RuleSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indirect_source_rules') }})
    members: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parents: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parents') }})
    translated_vm_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translated_vm_count') }})
    vendor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendor_id') }})
    
