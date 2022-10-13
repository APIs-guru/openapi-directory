from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LeaveBalance:
    leave_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LeaveName' }})
    leave_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LeaveTypeID' }})
    number_of_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfUnits' }})
    type_of_units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypeOfUnits' }})
    
