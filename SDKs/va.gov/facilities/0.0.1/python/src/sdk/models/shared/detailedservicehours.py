from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DetailedServiceHours:
    friday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Friday' }})
    monday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Monday' }})
    saturday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Saturday' }})
    sunday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sunday' }})
    thursday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Thursday' }})
    tuesday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tuesday' }})
    wednesday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Wednesday' }})
    
