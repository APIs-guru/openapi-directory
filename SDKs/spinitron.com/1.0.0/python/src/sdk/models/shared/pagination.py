from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Pagination:
    current_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentPage' }})
    page_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageCount' }})
    per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perPage' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCount' }})
    
