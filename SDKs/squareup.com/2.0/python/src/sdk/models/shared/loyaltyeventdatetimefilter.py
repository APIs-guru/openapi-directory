from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import timerange


@dataclass_json
@dataclass
class LoyaltyEventDateTimeFilter:
    created_at: timerange.TimeRange = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    
