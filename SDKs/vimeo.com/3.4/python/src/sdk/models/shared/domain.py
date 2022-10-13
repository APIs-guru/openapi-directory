from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Domain:
    allow_hd: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_hd' }})
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
