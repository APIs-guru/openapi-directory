from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import getpayeelistresponse_2


@dataclass_json
@dataclass
class PagedPayeeResponse2:
    content: Optional[List[getpayeelistresponse_2.GetPayeeListResponse2]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    links: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    page: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    summary: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    
