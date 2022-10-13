from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIKeyOptions:
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_id' }})
    
