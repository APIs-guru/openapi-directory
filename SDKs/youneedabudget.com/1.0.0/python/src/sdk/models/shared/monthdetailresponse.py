from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import monthdetail


@dataclass_json
@dataclass
class MonthDetailResponseData:
    month: monthdetail.MonthDetail = field(default=None, metadata={'dataclasses_json': { 'field_name': 'month' }})
    

@dataclass_json
@dataclass
class MonthDetailResponse:
    data: MonthDetailResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
