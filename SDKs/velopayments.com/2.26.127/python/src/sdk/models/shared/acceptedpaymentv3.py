from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AcceptedPaymentV3:
    amount: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    currency_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyType' }})
    payment_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMemo' }})
    payment_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMetadata' }})
    payor_payment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorPaymentId' }})
    remote_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteId' }})
    remote_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteSystemId' }})
    source_account_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceAccountName' }})
    
