from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import subscription


@dataclass_json
@dataclass
class UpdateSubscriptionRequest:
    subscription: Optional[subscription.Subscription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription' }})
    
