from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ruleset
from . import reference
from . import ruleset
from . import entitytype_enum
from . import reference
from . import ruleset
from . import ruleset
from . import reference
from . import reference


@dataclass_json
@dataclass
class BaseSecurityGroup:
    direct_destination_rules: Optional[List[ruleset.RuleSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direct_destination_rules' }})
    direct_members: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direct_members' }})
    direct_source_rules: Optional[List[ruleset.RuleSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direct_source_rules' }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_id' }})
    entity_type: Optional[entitytype_enum.EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    excluded_members: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excluded_members' }})
    indirect_destination_rules: Optional[List[ruleset.RuleSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indirect_destination_rules' }})
    indirect_source_rules: Optional[List[ruleset.RuleSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indirect_source_rules' }})
    members: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parents: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parents' }})
    translated_vm_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translated_vm_count' }})
    vendor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendor_id' }})
    
