from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class APIException:
    inner_exception: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InnerException') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    stack_trace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackTrace') }})
    custom_error: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customError') }})
    errors: Optional[List[ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    is_custom_error_object: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCustomErrorObject') }})
    is_model_validaton_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isModelValidatonError') }})
    reference_document_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceDocumentLink') }})
    reference_error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceErrorCode') }})
    status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCode') }})
    
