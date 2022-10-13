from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import payment


@dataclass_json
@dataclass
class UpdatePaymentRequest:
    idempotency_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    payment: Optional[payment.Payment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment' }})
    
