from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PageForResponse:
    number_of_elements: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfElements' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    total_elements: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalElements' }})
    total_pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPages' }})
    
