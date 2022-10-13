from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BatchRetrieveInventoryChangesRequest:
    catalog_object_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_object_ids' }})
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    location_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_ids' }})
    states: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'states' }})
    types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'types' }})
    updated_after: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_after' }})
    updated_before: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_before' }})
    
