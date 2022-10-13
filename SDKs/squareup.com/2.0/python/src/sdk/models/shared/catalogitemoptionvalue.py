from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CatalogItemOptionValue:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    item_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_option_id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ordinal: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ordinal' }})
    
