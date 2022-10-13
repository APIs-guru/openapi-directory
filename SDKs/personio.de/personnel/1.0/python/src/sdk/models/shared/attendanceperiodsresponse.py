from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AttendancePeriodsResponseDataAttributes:
    break_: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'break' }})
    comment: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    employee: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee' }})
    end_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_time' }})
    is_holiday: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_holiday' }})
    is_on_time_off: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_on_time_off' }})
    start_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_time' }})
    

@dataclass_json
@dataclass
class AttendancePeriodsResponseData:
    attributes: List[AttendancePeriodsResponseDataAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class AttendancePeriodsResponse:
    data: List[AttendancePeriodsResponseData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    success: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    
