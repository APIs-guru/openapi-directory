from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FlexV1Interaction:
    channel: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    routing: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routing') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
