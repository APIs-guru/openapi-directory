from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import detailedinvalidparam


@dataclass_json
@dataclass
class ValidationErrorsResponse:
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    invalid_parameters: Optional[List[detailedinvalidparam.DetailedInvalidParam]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalid_parameters' }})
    status: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
