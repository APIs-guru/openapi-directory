from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money
from . import money


@dataclass_json
@dataclass
class JobAssignment:
    annual_rate: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annual_rate' }})
    hourly_rate: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hourly_rate' }})
    job_title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'job_title' }})
    pay_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pay_type' }})
    weekly_hours: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weekly_hours' }})
    
