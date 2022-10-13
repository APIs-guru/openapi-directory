from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import errorobject


@dataclass_json
@dataclass
class ErrorResponse:
    errors: List[errorobject.ErrorObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
