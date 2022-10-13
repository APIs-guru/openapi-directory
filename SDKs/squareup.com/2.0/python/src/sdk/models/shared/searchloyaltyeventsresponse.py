from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import loyaltyevent


@dataclass_json
@dataclass
class SearchLoyaltyEventsResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    events: Optional[List[loyaltyevent.LoyaltyEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    
