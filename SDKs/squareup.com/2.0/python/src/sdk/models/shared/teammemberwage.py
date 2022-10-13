from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class TeamMemberWage:
    hourly_rate: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hourly_rate' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    team_member_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_member_id' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
