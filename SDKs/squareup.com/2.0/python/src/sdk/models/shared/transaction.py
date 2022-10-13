from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import refund
from . import address
from . import tender


@dataclass_json
@dataclass
class Transaction:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_id' }})
    product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference_id' }})
    refunds: Optional[List[refund.Refund]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunds' }})
    shipping_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_address' }})
    tenders: Optional[List[tender.Tender]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenders' }})
    
