from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import payment


@dataclass_json
@dataclass
class GetPaymentResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    payment: Optional[payment.Payment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment' }})
    
