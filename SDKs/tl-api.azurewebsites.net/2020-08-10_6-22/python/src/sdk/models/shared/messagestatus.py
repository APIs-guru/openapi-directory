from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MessageStatus:
    message_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageId') }})
    reference_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceId') }})
    source: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusId') }})
    status_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusText') }})
    
