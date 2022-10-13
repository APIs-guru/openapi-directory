from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Meta38:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    recipient_config_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient_config_json' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
