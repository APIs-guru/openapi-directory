from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesActiveServiceType:
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    service_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceType' }})
    
