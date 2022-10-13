from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import monthsummary


@dataclass_json
@dataclass
class MonthSummariesResponseData:
    months: List[monthsummary.MonthSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'months' }})
    server_knowledge: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_knowledge' }})
    

@dataclass_json
@dataclass
class MonthSummariesResponse:
    data: MonthSummariesResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
