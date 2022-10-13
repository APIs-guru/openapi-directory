from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class ManageEventActionEnum(str, Enum):
    CREATE = "create"
    FIRE = "fire"
    CHANGE = "change"
    DELETE = "delete"


@dataclass_json
@dataclass
class ManageEvent:
    action: Optional[ManageEventActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    action_params: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action_params' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
