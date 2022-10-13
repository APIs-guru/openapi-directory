from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ruleset
from . import entitytype_enum
from . import ipv4address
from . import reference
from . import reference
from . import ruleset
from . import reference


@dataclass_json
@dataclass
class BaseVirtualMachine:
    default_gateway: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_gateway' }})
    destination_firewall_rules: Optional[List[ruleset.RuleSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_firewall_rules' }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_id' }})
    entity_type: Optional[entitytype_enum.EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    ip_addresses: Optional[List[ipv4address.IPV4Address]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_addresses' }})
    ip_sets: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_sets' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    security_groups: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'security_groups' }})
    source_firewall_rules: Optional[List[ruleset.RuleSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_firewall_rules' }})
    vnics: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vnics' }})
    
