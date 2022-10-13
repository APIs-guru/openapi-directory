from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import payoutpayeev3
from . import transmissiontype_enum

class PaymentV3StatusEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    ACCEPTED = "ACCEPTED"
    REJECTED = "REJECTED"
    WITHDRAWN = "WITHDRAWN"
    RETURNED = "RETURNED"
    AWAITING_FUNDS = "AWAITING_FUNDS"
    FUNDED = "FUNDED"
    UNFUNDED = "UNFUNDED"
    CANCELLED = "CANCELLED"
    REQUESTED = "REQUESTED"


@dataclass_json
@dataclass
class PaymentV3:
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    payee: Optional[payoutpayeev3.PayoutPayeeV3] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee' }})
    payment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentId' }})
    payment_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMemo' }})
    payment_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMetadata' }})
    payor_payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorPaymentId' }})
    remote_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteId' }})
    remote_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteSystemId' }})
    source_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceAccountName' }})
    status: Optional[PaymentV3StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    transmission_type: Optional[transmissiontype_enum.TransmissionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transmissionType' }})
    withdrawable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'withdrawable' }})
    
