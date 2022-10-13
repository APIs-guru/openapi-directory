from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MetaTagModel:
    content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
