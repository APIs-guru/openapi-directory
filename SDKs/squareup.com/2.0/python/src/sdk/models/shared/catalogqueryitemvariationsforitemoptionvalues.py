from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CatalogQueryItemVariationsForItemOptionValues:
    item_option_value_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_option_value_ids' }})
    
