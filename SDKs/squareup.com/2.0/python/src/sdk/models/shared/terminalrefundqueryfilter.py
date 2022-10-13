from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timerange


@dataclass_json
@dataclass
class TerminalRefundQueryFilter:
    created_at: Optional[timerange.TimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_id' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
