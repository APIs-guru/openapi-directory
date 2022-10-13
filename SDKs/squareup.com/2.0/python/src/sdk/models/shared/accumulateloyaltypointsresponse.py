from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import loyaltyevent


@dataclass_json
@dataclass
class AccumulateLoyaltyPointsResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    event: Optional[loyaltyevent.LoyaltyEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    
