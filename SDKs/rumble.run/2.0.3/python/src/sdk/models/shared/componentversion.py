from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ComponentVersion:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
