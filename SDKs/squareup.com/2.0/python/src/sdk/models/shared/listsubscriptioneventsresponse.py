from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import subscriptionevent


@dataclass_json
@dataclass
class ListSubscriptionEventsResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    subscription_events: Optional[List[subscriptionevent.SubscriptionEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription_events' }})
    
