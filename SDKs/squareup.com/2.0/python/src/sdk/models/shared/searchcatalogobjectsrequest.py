from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import catalogquery


@dataclass_json
@dataclass
class SearchCatalogObjectsRequest:
    begin_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'begin_time' }})
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    include_deleted_objects: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_deleted_objects' }})
    include_related_objects: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_related_objects' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    object_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object_types' }})
    query: Optional[catalogquery.CatalogQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    
