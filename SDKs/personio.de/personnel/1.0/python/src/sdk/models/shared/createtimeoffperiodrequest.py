from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateTimeOffPeriodRequest:
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    employee_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee_id' }})
    end_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    half_day_end: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'half_day_end' }})
    half_day_start: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'half_day_start' }})
    start_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    time_off_type_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_off_type_id' }})
    
