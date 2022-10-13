from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Earning:
    agency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agency' }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    annual_maximum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annualMaximum' }})
    calculation_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calculationCode' }})
    cost_center1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costCenter1' }})
    cost_center2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costCenter2' }})
    cost_center3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costCenter3' }})
    earning_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'earningCode' }})
    effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveDate' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    goal: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goal' }})
    hours_or_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hoursOrUnits' }})
    is_self_insured: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSelfInsured' }})
    job_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobCode' }})
    miscellaneous_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'miscellaneousInfo' }})
    paid_towards_goal: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paidTowardsGoal' }})
    pay_period_maximum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payPeriodMaximum' }})
    pay_period_minimum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payPeriodMinimum' }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    rate_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateCode' }})
    start_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    
