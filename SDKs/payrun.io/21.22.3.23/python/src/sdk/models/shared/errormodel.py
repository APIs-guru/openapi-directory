from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ErrorModelErrorModelErrorCategoryErrorCategoryEnum(str, Enum):
    GENERAL = "General"
    NOT_FOUND = "NotFound"
    NOT_AUTHORISED = "NotAuthorised"
    VALIDATION_FAILURE = "ValidationFailure"


@dataclass_json
@dataclass
class ErrorModelErrorModelErrorsErrors:
    error: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    

@dataclass_json
@dataclass
class ErrorModelErrorModelErrorModel:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    error_category: Optional[ErrorModelErrorModelErrorCategoryErrorCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCategory' }})
    errors: Optional[ErrorModelErrorModelErrorsErrors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Errors' }})
    

@dataclass_json
@dataclass
class ErrorModel:
    error_model: Optional[ErrorModelErrorModelErrorModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorModel' }})
    
