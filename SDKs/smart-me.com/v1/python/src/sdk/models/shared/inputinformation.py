from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InputInformation:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Number' }})
    
