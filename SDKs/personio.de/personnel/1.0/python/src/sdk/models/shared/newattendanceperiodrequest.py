from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NewAttendancePeriodRequestAttendances:
    break_: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('break') }})
    comment: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    date_: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    employee: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee') }})
    end_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_time') }})
    start_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time') }})
    

@dataclass_json
@dataclass
class NewAttendancePeriodRequest:
    attendances: Optional[List[NewAttendancePeriodRequestAttendances]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendances') }})
    
