from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InvoiceAcceptedPaymentMethods:
    bank_account: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bank_account' }})
    card: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card' }})
    square_gift_card: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'square_gift_card' }})
    
