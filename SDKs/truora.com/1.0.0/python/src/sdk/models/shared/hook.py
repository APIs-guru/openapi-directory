from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class HookEventTypeEnum(str, Enum):
    ALL = "all"
    CHECK = "check"

class HookStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class Hook:
    actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    event_type: Optional[HookEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_type' }})
    signing_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signing_key' }})
    status: Optional[HookStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subscriber_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriber_type' }})
    subscriber_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriber_url' }})
    
