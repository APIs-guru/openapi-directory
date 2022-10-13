from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import behavior


@dataclass_json
@dataclass
class BehaviourOutput:
    behavior: List[behavior.Behavior] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'behavior' }})
    self: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
