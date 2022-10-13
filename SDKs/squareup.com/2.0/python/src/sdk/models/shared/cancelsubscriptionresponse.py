from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import subscription


@dataclass_json
@dataclass
class CancelSubscriptionResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    subscription: Optional[subscription.Subscription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription' }})
    
