from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Vlan:
    begin: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'begin' }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    
