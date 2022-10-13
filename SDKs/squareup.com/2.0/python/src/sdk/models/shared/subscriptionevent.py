from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SubscriptionEvent:
    effective_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effective_date' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    info: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    plan_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan_id' }})
    subscription_event_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription_event_type' }})
    
