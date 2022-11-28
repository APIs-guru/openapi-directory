from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ErrorModelErrorModelErrorCategoryEnum(str, Enum):
    GENERAL = "General"
    NOT_FOUND = "NotFound"
    NOT_AUTHORISED = "NotAuthorised"
    VALIDATION_FAILURE = "ValidationFailure"


@dataclass_json
@dataclass
class ErrorModelErrorModelErrors:
    r"""ErrorModelErrorModelErrors
    The error models' errors
    """
    
    error: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    

@dataclass_json
@dataclass
class ErrorModelErrorModel:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    error_category: Optional[ErrorModelErrorModelErrorCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCategory') }})
    errors: Optional[ErrorModelErrorModelErrors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    

@dataclass_json
@dataclass
class ErrorModel:
    error_model: Optional[ErrorModelErrorModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorModel') }})
    
