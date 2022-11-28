from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PagedUserResponse:
    r"""PagedUserResponse
    List Users Response Object
    """
    
    content: Optional[List[UserResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
