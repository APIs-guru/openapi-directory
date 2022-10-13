from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import errordetail


@dataclass_json
@dataclass
class ErrorResponse:
    error: errordetail.ErrorDetail = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    
