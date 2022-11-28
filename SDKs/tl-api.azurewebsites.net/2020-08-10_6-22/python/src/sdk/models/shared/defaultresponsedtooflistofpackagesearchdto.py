from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DefaultResponseDtoOfListOfPackageSearchDto:
    r"""DefaultResponseDtoOfListOfPackageSearchDto
    The DefaultResponseDTO Class.
    Contains fields of DefaultResponse DTO in application.
                
    """
    
    is_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isError') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    response_exception: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseException') }})
    result: Optional[List[PackageSearchDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
