from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PingResponseMeta:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status_emoji: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusEmoji' }})
    

@dataclass_json
@dataclass
class PingResponse:
    meta: PingResponseMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    
