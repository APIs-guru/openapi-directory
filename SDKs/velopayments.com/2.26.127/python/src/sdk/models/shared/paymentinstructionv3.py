from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import transmissiontype_enum


@dataclass_json
@dataclass
class PaymentInstructionV3:
    amount: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    payment_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMemo' }})
    payment_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMetadata' }})
    payor_payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorPaymentId' }})
    remote_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteId' }})
    remote_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteSystemId' }})
    source_account_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceAccountName' }})
    transmission_type: Optional[transmissiontype_enum.TransmissionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transmissionType' }})
    
