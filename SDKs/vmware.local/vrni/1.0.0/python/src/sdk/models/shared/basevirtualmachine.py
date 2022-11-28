from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BaseVirtualMachine:
    default_gateway: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_gateway') }})
    destination_firewall_rules: Optional[List[RuleSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_firewall_rules') }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_id') }})
    entity_type: Optional[EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    ip_addresses: Optional[List[IPV4Address]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_addresses') }})
    ip_sets: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_sets') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    security_groups: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('security_groups') }})
    source_firewall_rules: Optional[List[RuleSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_firewall_rules') }})
    vnics: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vnics') }})
    
