from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import catalogobject


@dataclass_json
@dataclass
class CatalogObjectBatch:
    objects: List[catalogobject.CatalogObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objects' }})
    
