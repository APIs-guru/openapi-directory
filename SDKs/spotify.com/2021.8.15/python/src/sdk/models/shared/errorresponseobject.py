from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errorobject


@dataclass_json
@dataclass
class ErrorResponseObject:
    error: Optional[errorobject.ErrorObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    
