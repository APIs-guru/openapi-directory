from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Endpoint:
    methods: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'methods' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    
