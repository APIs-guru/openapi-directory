from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LeaveEarningsLine:
    earnings_rate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EarningsRateID' }})
    number_of_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfUnits' }})
    rate_per_unit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RatePerUnit' }})
    
