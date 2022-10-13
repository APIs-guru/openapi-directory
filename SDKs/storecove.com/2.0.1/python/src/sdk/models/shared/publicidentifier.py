from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PublicIdentifier:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    scheme: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheme' }})
    
