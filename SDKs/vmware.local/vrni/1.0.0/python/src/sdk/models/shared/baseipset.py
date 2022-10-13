from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ruleset
from . import ruleset
from . import entitytype_enum
from . import ruleset
from . import ruleset
from . import ipv4address
from . import reference


@dataclass_json
@dataclass
class BaseIPSet:
    direct_destination_rules: Optional[List[ruleset.RuleSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direct_destination_rules' }})
    direct_source_rules: Optional[List[ruleset.RuleSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direct_source_rules' }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_id' }})
    entity_type: Optional[entitytype_enum.EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    indirect_destination_rules: Optional[List[ruleset.RuleSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indirect_destination_rules' }})
    indirect_source_rules: Optional[List[ruleset.RuleSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indirect_source_rules' }})
    ip_addresses: Optional[List[ipv4address.IPV4Address]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_addresses' }})
    ip_numeric_ranges: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_numeric_ranges' }})
    ip_ranges: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_ranges' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_security_groups: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_security_groups' }})
    translated_vm_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translated_vm_count' }})
    vendor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendor' }})
    vendor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendor_id' }})
    
