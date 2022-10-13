from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import rulenoid


@dataclass_json
@dataclass
class AddRulesRequest:
    add: List[rulenoid.RuleNoID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add' }})
    
