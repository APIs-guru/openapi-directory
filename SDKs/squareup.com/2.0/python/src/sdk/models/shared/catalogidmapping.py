from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CatalogIDMapping:
    client_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_object_id' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object_id' }})
    
