from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SearchOrdersSort:
    sort_field: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort_field' }})
    sort_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort_order' }})
    
