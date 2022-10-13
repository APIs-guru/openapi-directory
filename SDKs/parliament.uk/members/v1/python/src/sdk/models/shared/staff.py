from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Staff:
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    forename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forename' }})
    surname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'surname' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
