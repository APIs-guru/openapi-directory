from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ManageEventActionEnum(str, Enum):
    CREATE = "create"
    FIRE = "fire"
    CHANGE = "change"
    DELETE = "delete"


@dataclass_json
@dataclass
class ManageEvent:
    action: Optional[ManageEventActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    action_params: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action_params') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
