from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateAttendancePeriodRequest:
    break_: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'break' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_time' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_time' }})
    
