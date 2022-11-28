from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PagedPayeeResponse:
    r"""PagedPayeeResponse
    List Payees Response Object
    """
    
    content: Optional[List[GetPayeeListResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    summary: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
