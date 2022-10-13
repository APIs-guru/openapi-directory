from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ErrorResponse:
    msg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'msg' }})
    status: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
