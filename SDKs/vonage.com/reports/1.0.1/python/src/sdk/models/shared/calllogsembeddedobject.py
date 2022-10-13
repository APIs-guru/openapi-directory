from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import calllog


@dataclass_json
@dataclass
class CallLogsEmbeddedObject:
    call_logs: Optional[List[calllog.CallLog]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_logs' }})
    
