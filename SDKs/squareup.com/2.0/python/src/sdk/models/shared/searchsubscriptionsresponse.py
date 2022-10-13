from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import subscription


@dataclass_json
@dataclass
class SearchSubscriptionsResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    subscriptions: Optional[List[subscription.Subscription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptions' }})
    
