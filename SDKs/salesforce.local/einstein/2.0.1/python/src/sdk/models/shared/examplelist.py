from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import example


@dataclass_json
@dataclass
class ExampleList:
    data: Optional[List[example.Example]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    
