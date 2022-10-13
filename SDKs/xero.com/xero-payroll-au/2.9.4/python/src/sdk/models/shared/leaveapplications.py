from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import leaveapplication


@dataclass_json
@dataclass
class LeaveApplications:
    leave_applications: Optional[List[leaveapplication.LeaveApplication]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LeaveApplications' }})
    
