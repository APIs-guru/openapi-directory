from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetRelatedSchema:
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    include_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_ids' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    
