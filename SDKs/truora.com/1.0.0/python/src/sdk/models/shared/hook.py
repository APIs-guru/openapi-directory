from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HookEventTypeEnum(str, Enum):
    ALL = "all"
    CHECK = "check"

class HookStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class Hook:
    r"""Hook
    Represents a hook configuration
    """
    
    actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    event_type: Optional[HookEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_type') }})
    signing_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signing_key') }})
    status: Optional[HookStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subscriber_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriber_type') }})
    subscriber_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriber_url') }})
    
