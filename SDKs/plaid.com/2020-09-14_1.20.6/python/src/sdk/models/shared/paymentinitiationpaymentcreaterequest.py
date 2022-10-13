from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PaymentInitiationPaymentCreateRequest:
    amount: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    options: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    recipient_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient_id' }})
    reference: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference' }})
    schedule: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
