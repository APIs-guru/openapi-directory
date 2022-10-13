from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ErrorNotFoundErrors:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class ErrorNotFound:
    errors: Optional[List[ErrorNotFoundErrors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
