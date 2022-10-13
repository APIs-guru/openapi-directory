from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import catalogidmapping
from . import catalogobject


@dataclass_json
@dataclass
class BatchUpsertCatalogObjectsResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    id_mappings: Optional[List[catalogidmapping.CatalogIDMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id_mappings' }})
    objects: Optional[List[catalogobject.CatalogObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objects' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    
