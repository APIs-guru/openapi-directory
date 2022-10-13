from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesPlaceCategory:
    available_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableKeys' }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    
