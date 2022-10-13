from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrderLineItemPricingBlocklistsBlockedDiscount:
    discount_catalog_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discount_catalog_object_id' }})
    discount_uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discount_uid' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    
