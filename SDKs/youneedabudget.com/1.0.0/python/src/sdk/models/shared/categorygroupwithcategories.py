from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import category


@dataclass_json
@dataclass
class CategoryGroupWithCategories:
    categories: List[category.Category] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    deleted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    hidden: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hidden' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
