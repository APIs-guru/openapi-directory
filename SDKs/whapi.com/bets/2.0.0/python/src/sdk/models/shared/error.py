from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import solution


@dataclass_json
@dataclass
class Error:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    solution: Optional[solution.Solution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solution' }})
    
