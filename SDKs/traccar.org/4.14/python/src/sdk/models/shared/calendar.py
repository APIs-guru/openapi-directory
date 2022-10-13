from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Calendar:
    attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
