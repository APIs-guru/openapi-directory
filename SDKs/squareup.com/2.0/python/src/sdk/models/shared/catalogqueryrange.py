from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CatalogQueryRange:
    attribute_max_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribute_max_value' }})
    attribute_min_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribute_min_value' }})
    attribute_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribute_name' }})
    
