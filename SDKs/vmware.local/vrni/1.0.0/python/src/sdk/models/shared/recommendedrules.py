from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recommendedrule
from . import timerange


@dataclass_json
@dataclass
class RecommendedRules:
    results: Optional[List[recommendedrule.RecommendedRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    time_range: Optional[timerange.TimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_range' }})
    
