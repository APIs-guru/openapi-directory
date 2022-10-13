from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PaymentDelta:
    payment_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentAmount' }})
    payment_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentCurrency' }})
    payment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentId' }})
    payor_payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorPaymentId' }})
    payout_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payoutId' }})
    source_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceAmount' }})
    source_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceCurrency' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
