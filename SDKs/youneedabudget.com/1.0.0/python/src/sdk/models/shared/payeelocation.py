from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PayeeLocation:
    deleted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    latitude: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    payee_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_id' }})
    
