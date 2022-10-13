from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import paymentrefund


@dataclass_json
@dataclass
class ListPaymentRefundsResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    refunds: Optional[List[paymentrefund.PaymentRefund]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunds' }})
    
