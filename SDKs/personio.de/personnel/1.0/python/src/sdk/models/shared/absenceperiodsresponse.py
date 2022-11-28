from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AbsencePeriodsResponseDataAttributesCertificate:
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class AbsencePeriodsResponseDataAttributesEmployeeAttributes:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    

@dataclass_json
@dataclass
class AbsencePeriodsResponseDataAttributesEmployee:
    attributes: Optional[List[AbsencePeriodsResponseDataAttributesEmployeeAttributes]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class AbsencePeriodsResponseDataAttributesTimeOffType:
    attributes: Optional[List[AbsencePeriodsResponseDataAttributesTimeOffTypeAttributes]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class AbsencePeriodsResponseDataAttributes:
    certificate: Optional[AbsencePeriodsResponseDataAttributesCertificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    days_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('days_count') }})
    employee: Optional[AbsencePeriodsResponseDataAttributesEmployee] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date') }})
    half_day_end: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('half_day_end') }})
    half_day_start: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('half_day_start') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    time_off_type: Optional[AbsencePeriodsResponseDataAttributesTimeOffType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_off_type') }})
    

@dataclass_json
@dataclass
class AbsencePeriodsResponseData:
    attributes: List[AbsencePeriodsResponseDataAttributes] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class AbsencePeriodsResponse:
    data: AbsencePeriodsResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    success: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
