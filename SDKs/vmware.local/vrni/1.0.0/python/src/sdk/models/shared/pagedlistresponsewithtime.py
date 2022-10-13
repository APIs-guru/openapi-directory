from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import entityidwithtime


@dataclass_json
@dataclass
class PagedListResponseWithTime:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    end_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_time' }})
    results: Optional[List[entityidwithtime.EntityIDWithTime]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    start_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_time' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    
