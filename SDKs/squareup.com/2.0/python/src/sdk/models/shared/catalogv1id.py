from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CatalogV1ID:
    catalog_v1_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_v1_id' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    
