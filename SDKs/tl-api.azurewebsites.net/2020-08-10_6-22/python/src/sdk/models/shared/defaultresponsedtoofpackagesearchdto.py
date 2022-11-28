from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DefaultResponseDtoOfPackageSearchDto:
    r"""DefaultResponseDtoOfPackageSearchDto
    The DefaultResponseDTO Class.
    Contains fields of DefaultResponse DTO in application.
                
    """
    
    is_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isError') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    response_exception: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseException') }})
    result: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
