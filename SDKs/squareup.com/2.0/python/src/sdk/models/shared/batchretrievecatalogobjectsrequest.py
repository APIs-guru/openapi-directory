from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BatchRetrieveCatalogObjectsRequest:
    catalog_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_version' }})
    include_related_objects: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_related_objects' }})
    object_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object_ids' }})
    
