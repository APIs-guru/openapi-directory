from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Pagination:
    item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemCount' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageCount' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    
