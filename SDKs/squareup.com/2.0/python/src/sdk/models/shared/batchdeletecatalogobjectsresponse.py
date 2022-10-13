from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error


@dataclass_json
@dataclass
class BatchDeleteCatalogObjectsResponse:
    deleted_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted_at' }})
    deleted_object_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted_object_ids' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
