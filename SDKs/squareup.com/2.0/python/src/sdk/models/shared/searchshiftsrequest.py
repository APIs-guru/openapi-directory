from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import shiftquery


@dataclass_json
@dataclass
class SearchShiftsRequest:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    query: Optional[shiftquery.ShiftQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    
