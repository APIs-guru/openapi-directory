from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timerange
from . import timerange
from . import timerange


@dataclass_json
@dataclass
class SearchOrdersDateTimeFilter:
    closed_at: Optional[timerange.TimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed_at' }})
    created_at: Optional[timerange.TimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    updated_at: Optional[timerange.TimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    
