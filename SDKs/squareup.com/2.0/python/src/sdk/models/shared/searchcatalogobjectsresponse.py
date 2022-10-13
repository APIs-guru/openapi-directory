from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import catalogobject
from . import catalogobject


@dataclass_json
@dataclass
class SearchCatalogObjectsResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    latest_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latest_time' }})
    objects: Optional[List[catalogobject.CatalogObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objects' }})
    related_objects: Optional[List[catalogobject.CatalogObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related_objects' }})
    
