from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ClientDisconnectedProblem:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
