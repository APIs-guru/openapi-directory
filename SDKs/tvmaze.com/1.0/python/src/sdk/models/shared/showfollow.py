from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ShowFollowEmbedded:
    show: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show' }})
    

@dataclass_json
@dataclass
class ShowFollow:
    embedded: Optional[ShowFollowEmbedded] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    show_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_id' }})
    
