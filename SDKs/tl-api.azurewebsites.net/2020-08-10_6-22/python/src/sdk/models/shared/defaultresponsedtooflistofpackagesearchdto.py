from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import packagesearchdto


@dataclass_json
@dataclass
class DefaultResponseDtoOfListOfPackageSearchDto:
    is_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isError' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    response_exception: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseException' }})
    result: Optional[List[packagesearchdto.PackageSearchDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
