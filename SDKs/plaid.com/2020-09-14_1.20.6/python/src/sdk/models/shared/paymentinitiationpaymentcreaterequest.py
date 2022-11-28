from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PaymentInitiationPaymentCreateRequest:
    r"""PaymentInitiationPaymentCreateRequest
    PaymentInitiationPaymentCreateRequest defines the request schema for `/payment_initiation/payment/create`
    """
    
    amount: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    recipient_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient_id') }})
    reference: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    options: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    schedule: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
