from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import member
from . import staff


@dataclass_json
@dataclass
class MembersStaff:
    member: Optional[member.Member] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member' }})
    staff: Optional[List[staff.Staff]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staff' }})
    
