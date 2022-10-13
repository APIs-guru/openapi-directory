from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesOrderedRoute:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    naptan_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'naptanIds' }})
    service_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceType' }})
    
