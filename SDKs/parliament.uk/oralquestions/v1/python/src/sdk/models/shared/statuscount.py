from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StatusCount:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Count' }})
    status_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusId' }})
    
