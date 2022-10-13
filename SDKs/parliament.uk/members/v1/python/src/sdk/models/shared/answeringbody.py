from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import governmentdepartment


@dataclass_json
@dataclass
class AnsweringBody:
    department: Optional[governmentdepartment.GovernmentDepartment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'department' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortName' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    
