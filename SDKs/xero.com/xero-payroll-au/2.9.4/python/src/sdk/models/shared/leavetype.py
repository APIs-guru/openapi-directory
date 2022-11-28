from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LeaveType:
    current_record: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentRecord') }})
    is_paid_leave: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsPaidLeave') }})
    leave_loading_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveLoadingRate') }})
    leave_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveTypeID') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    normal_entitlement: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NormalEntitlement') }})
    show_on_payslip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShowOnPayslip') }})
    type_of_units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypeOfUnits') }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDateUTC') }})
    

@dataclass_json
@dataclass
class LeaveTypeInput:
    current_record: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentRecord') }})
    is_paid_leave: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsPaidLeave') }})
    leave_loading_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveLoadingRate') }})
    leave_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveTypeID') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    normal_entitlement: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NormalEntitlement') }})
    show_on_payslip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShowOnPayslip') }})
    type_of_units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypeOfUnits') }})
    
