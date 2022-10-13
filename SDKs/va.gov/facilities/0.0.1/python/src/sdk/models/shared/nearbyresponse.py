from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nearby
from . import meta


@dataclass_json
@dataclass
class NearbyResponse:
    data: List[nearby.Nearby] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    
