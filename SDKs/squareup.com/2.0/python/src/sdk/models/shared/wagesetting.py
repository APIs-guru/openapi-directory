from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jobassignment


@dataclass_json
@dataclass
class WageSetting:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    is_overtime_exempt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_overtime_exempt' }})
    job_assignments: Optional[List[jobassignment.JobAssignment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'job_assignments' }})
    team_member_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_member_id' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
