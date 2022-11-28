from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateTimeOffPeriodRequest:
    employee_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee_id') }})
    end_date: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    half_day_end: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('half_day_end') }})
    half_day_start: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('half_day_start') }})
    start_date: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    time_off_type_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_off_type_id') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    
