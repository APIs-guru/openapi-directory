from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money
from . import money


@dataclass_json
@dataclass
class RefundPaymentRequest:
    amount_money: money.Money = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    app_fee_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app_fee_money' }})
    idempotency_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    payment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_id' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    
