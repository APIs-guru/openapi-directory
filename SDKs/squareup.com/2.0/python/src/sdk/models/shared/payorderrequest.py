from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PayOrderRequest:
    idempotency_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    order_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_version' }})
    payment_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_ids' }})
    
