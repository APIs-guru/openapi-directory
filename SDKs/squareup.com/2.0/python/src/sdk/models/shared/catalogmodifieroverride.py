from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CatalogModifierOverride:
    modifier_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifier_id' }})
    on_by_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'on_by_default' }})
    
