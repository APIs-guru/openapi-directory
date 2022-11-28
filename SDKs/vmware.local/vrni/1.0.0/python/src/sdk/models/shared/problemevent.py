from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ProblemEventAdminStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

class ProblemEventSeverityEnum(str, Enum):
    CRITICAL = "CRITICAL"
    MODERATE = "MODERATE"
    WARNING = "WARNING"
    INFO = "INFO"


@dataclass_json
@dataclass
class ProblemEvent:
    admin_state: Optional[ProblemEventAdminStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin_state') }})
    anchor_entities: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anchor_entities') }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_id') }})
    entity_type: Optional[EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    event_close_time_epoch_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_close_time_epoch_ms') }})
    event_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_tags') }})
    event_time_epoch_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_time_epoch_ms') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    related_entities: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('related_entities') }})
    severity: Optional[ProblemEventSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    
