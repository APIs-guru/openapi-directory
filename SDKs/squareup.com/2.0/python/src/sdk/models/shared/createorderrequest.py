from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import order


@dataclass_json
@dataclass
class CreateOrderRequest:
    idempotency_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    order: Optional[order.Order] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    
