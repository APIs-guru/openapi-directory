from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import allentitytype_enum
from . import sortbyclause
from . import timerange


@dataclass_json
@dataclass
class SearchRequest:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    entity_type: Optional[allentitytype_enum.AllEntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    sort_by: Optional[sortbyclause.SortByClause] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort_by' }})
    time_range: Optional[timerange.TimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_range' }})
    
