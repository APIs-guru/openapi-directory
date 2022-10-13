from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CatalogQuerySortedAttribute:
    attribute_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribute_name' }})
    initial_attribute_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initial_attribute_value' }})
    sort_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort_order' }})
    
