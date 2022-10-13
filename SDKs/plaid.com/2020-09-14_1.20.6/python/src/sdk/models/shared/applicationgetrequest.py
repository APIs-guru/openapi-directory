from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ApplicationGetRequest:
    application_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application_id' }})
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
