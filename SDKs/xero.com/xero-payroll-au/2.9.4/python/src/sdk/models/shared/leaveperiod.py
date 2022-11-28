from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LeavePeriod:
    leave_period_status: Optional[LeavePeriodStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeavePeriodStatus') }})
    number_of_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfUnits') }})
    pay_period_end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayPeriodEndDate') }})
    pay_period_start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayPeriodStartDate') }})
    
