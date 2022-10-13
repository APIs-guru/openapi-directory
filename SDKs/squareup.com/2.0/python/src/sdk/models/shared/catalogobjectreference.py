from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CatalogObjectReference:
    catalog_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_version' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object_id' }})
    
