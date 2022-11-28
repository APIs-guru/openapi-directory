from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StatusDto:
    r"""StatusDto
    Imideate response for long running api call.
                
    """
    
    message_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageId') }})
    status_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusText') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
