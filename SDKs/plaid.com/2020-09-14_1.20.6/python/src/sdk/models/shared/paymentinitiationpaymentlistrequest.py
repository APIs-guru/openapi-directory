from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PaymentInitiationPaymentListRequest:
    r"""PaymentInitiationPaymentListRequest
    PaymentInitiationPaymentListRequest defines the request schema for `/payment_initiation/payment/list`
    """
    
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cursor') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
