from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EventsV1SubscriptionSubscribedEvent:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    schema_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema_version' }})
    subscription_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription_sid' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
