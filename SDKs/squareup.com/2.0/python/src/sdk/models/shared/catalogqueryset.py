from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CatalogQuerySet:
    attribute_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribute_name' }})
    attribute_values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribute_values' }})
    
