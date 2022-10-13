from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import category


@dataclass_json
@dataclass
class CategoryRule:
    category: Optional[category.Category] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    payee_matches: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_matches' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    
