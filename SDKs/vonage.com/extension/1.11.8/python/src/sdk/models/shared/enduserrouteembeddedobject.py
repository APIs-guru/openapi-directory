from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import enduserroute


@dataclass_json
@dataclass
class EndUserRouteEmbeddedObject:
    data: Optional[enduserroute.EndUserRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
