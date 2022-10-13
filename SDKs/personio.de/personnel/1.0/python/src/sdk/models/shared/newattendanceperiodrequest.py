from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NewAttendancePeriodRequestAttendances:
    break_: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'break' }})
    comment: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    employee: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee' }})
    end_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_time' }})
    start_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_time' }})
    

@dataclass_json
@dataclass
class NewAttendancePeriodRequest:
    attendances: Optional[List[NewAttendancePeriodRequestAttendances]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attendances' }})
    
