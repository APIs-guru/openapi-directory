from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PollOption:
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    position: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    votes: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'votes' }})
    
