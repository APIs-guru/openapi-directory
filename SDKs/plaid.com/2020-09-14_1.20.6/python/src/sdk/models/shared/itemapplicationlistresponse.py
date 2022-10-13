from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import connectedapplication


@dataclass_json
@dataclass
class ItemApplicationListResponse:
    applications: List[connectedapplication.ConnectedApplication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applications' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    
