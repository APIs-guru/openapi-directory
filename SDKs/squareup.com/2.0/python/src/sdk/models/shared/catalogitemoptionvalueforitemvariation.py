from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CatalogItemOptionValueForItemVariation:
    item_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_option_id' }})
    item_option_value_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_option_value_id' }})
    
