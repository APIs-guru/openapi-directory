from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import leaveperiodstatus_enum


@dataclass_json
@dataclass
class LeavePeriod:
    leave_period_status: Optional[leaveperiodstatus_enum.LeavePeriodStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LeavePeriodStatus' }})
    number_of_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfUnits' }})
    pay_period_end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayPeriodEndDate' }})
    pay_period_start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayPeriodStartDate' }})
    
