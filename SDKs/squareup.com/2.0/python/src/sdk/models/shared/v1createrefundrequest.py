from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import v1money


@dataclass_json
@dataclass
class V1CreateRefundRequest:
    payment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_id' }})
    reason: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    refunded_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunded_money' }})
    request_idempotence_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_idempotence_key' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
