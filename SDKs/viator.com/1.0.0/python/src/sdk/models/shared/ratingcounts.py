from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RatingCounts:
    one: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': '1' }})
    two: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': '2' }})
    three: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': '3' }})
    four: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': '4' }})
    five: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': '5' }})
    
