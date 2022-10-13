from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import catalogobject
from . import error
from . import catalogidmapping


@dataclass_json
@dataclass
class UpsertCatalogObjectResponse:
    catalog_object: Optional[catalogobject.CatalogObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_object' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    id_mappings: Optional[List[catalogidmapping.CatalogIDMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id_mappings' }})
    
