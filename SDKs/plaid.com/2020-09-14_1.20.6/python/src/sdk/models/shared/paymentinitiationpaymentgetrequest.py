from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PaymentInitiationPaymentGetRequest:
    r"""PaymentInitiationPaymentGetRequest
    PaymentInitiationPaymentGetRequest defines the request schema for `/payment_initiation/payment/get`
    """
    
    payment_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_id') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
