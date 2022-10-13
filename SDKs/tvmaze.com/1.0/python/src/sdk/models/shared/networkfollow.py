from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NetworkFollowEmbedded:
    network: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    

@dataclass_json
@dataclass
class NetworkFollow:
    embedded: Optional[NetworkFollowEmbedded] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    network_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_id' }})
    
