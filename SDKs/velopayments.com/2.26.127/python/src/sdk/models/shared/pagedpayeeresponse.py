from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import getpayeelistresponse


@dataclass_json
@dataclass
class PagedPayeeResponse:
    content: Optional[List[getpayeelistresponse.GetPayeeListResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    links: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    page: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    summary: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    
