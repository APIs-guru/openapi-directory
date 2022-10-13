from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import businesshoursperiod


@dataclass_json
@dataclass
class BusinessHours:
    periods: Optional[List[businesshoursperiod.BusinessHoursPeriod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periods' }})
    
