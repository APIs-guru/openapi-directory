from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomerTextFilter:
    exact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exact' }})
    fuzzy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fuzzy' }})
    
