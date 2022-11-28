from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AttendancePeriodsResponseDataAttributes:
    break_: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('break') }})
    comment: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    date_: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    employee: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee') }})
    end_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_time') }})
    is_holiday: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_holiday') }})
    is_on_time_off: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_on_time_off') }})
    start_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time') }})
    

@dataclass_json
@dataclass
class AttendancePeriodsResponseData:
    attributes: List[AttendancePeriodsResponseDataAttributes] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class AttendancePeriodsResponse:
    data: List[AttendancePeriodsResponseData] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    success: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    
