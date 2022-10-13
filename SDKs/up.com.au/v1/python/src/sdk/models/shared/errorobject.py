from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ErrorObjectSource:
    parameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameter' }})
    pointer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pointer' }})
    

@dataclass_json
@dataclass
class ErrorObject:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    source: Optional[ErrorObjectSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
