from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import searchordersquery


@dataclass_json
@dataclass
class SearchOrdersRequest:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    location_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_ids' }})
    query: Optional[searchordersquery.SearchOrdersQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    return_entries: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'return_entries' }})
    
