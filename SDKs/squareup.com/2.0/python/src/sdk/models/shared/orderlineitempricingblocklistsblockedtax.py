from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrderLineItemPricingBlocklistsBlockedTax:
    tax_catalog_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_catalog_object_id' }})
    tax_uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_uid' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    
