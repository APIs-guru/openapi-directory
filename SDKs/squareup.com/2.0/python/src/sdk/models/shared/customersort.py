from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomerSort:
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    
