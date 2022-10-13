from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Meta5:
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    
