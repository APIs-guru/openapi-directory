from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CatalogCustomAttributeDefinitionStringConfig:
    enforce_uniqueness: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enforce_uniqueness' }})
    
