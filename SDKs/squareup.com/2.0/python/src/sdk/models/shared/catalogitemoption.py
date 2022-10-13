from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import catalogobject


@dataclass_json
@dataclass
class CatalogItemOption:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    show_colors: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_colors' }})
    values: Optional[List[catalogobject.CatalogObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
