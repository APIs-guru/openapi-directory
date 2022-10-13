from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SyncV1ServiceSyncStreamStreamMessage:
    data: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    
