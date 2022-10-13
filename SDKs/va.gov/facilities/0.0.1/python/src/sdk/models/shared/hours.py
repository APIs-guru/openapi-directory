from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Hours:
    friday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friday' }})
    monday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monday' }})
    saturday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saturday' }})
    sunday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sunday' }})
    thursday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thursday' }})
    tuesday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tuesday' }})
    wednesday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wednesday' }})
    
