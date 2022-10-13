from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SourceApplication:
    application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application_id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    
