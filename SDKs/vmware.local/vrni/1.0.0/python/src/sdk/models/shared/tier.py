from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import reference
from . import entitytype_enum
from . import groupmembershipcriteria


@dataclass_json
@dataclass
class Tier:
    application: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application' }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_id' }})
    entity_type: Optional[entitytype_enum.EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    group_membership_criteria: Optional[List[groupmembershipcriteria.GroupMembershipCriteria]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_membership_criteria' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
