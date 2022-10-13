from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class V1PaymentItemDetail:
    category_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_name' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_id' }})
    item_variation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_variation_id' }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    
