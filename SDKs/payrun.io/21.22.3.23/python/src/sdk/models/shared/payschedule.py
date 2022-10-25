from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class PaySchedulePaySchedulePayFrequencyEnum(str, Enum):
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    TWO_WEEKLY = "TwoWeekly"
    FOUR_WEEKLY = "FourWeekly"
    YEARLY = "Yearly"


@dataclass_json
@dataclass
class PaySchedulePaySchedule:
    meta_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetaData' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    pay_frequency: Optional[PaySchedulePaySchedulePayFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayFrequency' }})
    

@dataclass_json
@dataclass
class PaySchedule:
    pay_schedule: Optional[PaySchedulePaySchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaySchedule' }})
    
