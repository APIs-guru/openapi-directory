from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIV2010AccountQueueMember:
    call_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_sid' }})
    date_enqueued: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_enqueued' }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    queue_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queue_sid' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    wait_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wait_time' }})
    
