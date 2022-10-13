from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import category


@dataclass_json
@dataclass
class CodeCategory:
    category: Optional[category.Category] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
