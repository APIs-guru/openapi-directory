from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RejectedPaymentV3:
    amount: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    currency_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyType' }})
    line_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineNumber' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    payment_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMetadata' }})
    payor_payment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorPaymentId' }})
    reason: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    reason_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonCode' }})
    remote_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteId' }})
    remote_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteSystemId' }})
    source_account_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceAccountName' }})
    
