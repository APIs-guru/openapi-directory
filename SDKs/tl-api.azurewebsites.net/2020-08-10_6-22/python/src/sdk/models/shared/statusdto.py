from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StatusDto:
    message_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageId' }})
    status_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusText' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
