from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import break_
from . import shiftwage


@dataclass_json
@dataclass
class Shift:
    breaks: Optional[List[break_.Break]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'breaks' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee_id' }})
    end_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_at' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    start_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_at' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    team_member_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_member_id' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    wage: Optional[shiftwage.ShiftWage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wage' }})
    
