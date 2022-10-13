from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import microsecgroup
from . import microsecgroup
from . import timerange


@dataclass_json
@dataclass
class RecommendedRulesRequest:
    group_1: Optional[microsecgroup.MicroSecGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_1' }})
    group_2: Optional[microsecgroup.MicroSecGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_2' }})
    time_range: Optional[timerange.TimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_range' }})
    
