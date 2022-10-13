from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Meta6:
    default_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_endpoint' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table_name' }})
    
