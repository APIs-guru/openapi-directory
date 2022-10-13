from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import change


@dataclass_json
@dataclass
class GetContiuousCheckHistoryOutput:
    history: List[change.Change] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'history' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
