from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesTrainLoading:
    direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    line: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line' }})
    line_direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineDirection' }})
    naptan_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'naptanTo' }})
    platform_direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformDirection' }})
    time_slice: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSlice' }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
