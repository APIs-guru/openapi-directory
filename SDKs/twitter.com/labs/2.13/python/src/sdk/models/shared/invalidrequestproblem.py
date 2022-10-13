from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InvalidRequestProblemErrors:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    parameters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    

@dataclass_json
@dataclass
class InvalidRequestProblem:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    errors: Optional[List[InvalidRequestProblemErrors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
