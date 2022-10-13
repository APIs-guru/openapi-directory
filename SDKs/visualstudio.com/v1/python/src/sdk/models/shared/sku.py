from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Sku:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier' }})
    
