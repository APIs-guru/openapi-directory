from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import catalogobject


@dataclass_json
@dataclass
class UpsertCatalogObjectRequest:
    idempotency_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    object: catalogobject.CatalogObject = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    
