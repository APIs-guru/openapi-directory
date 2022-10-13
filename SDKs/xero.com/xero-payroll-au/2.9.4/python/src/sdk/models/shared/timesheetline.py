from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimesheetLine:
    earnings_rate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EarningsRateID' }})
    number_of_units: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfUnits' }})
    tracking_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrackingItemID' }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedDateUTC' }})
    
