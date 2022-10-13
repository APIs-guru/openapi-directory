from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SupportedCurrencyV2:
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    max_payment_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxPaymentAmount' }})
    
