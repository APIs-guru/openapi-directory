from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIResponse:
    is_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isError' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    response_exception: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseException' }})
    result: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
