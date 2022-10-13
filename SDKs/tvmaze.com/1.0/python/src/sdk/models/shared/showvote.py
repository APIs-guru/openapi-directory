from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ShowVote:
    show_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_id' }})
    vote: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vote' }})
    voted_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voted_at' }})
    
