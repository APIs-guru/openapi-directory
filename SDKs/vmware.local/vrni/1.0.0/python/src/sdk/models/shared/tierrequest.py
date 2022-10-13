from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import groupmembershipcriteria


@dataclass_json
@dataclass
class TierRequest:
    group_membership_criteria: Optional[List[groupmembershipcriteria.GroupMembershipCriteria]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_membership_criteria' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
