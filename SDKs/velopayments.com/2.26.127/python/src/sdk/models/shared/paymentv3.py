from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    payment_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentId') }})
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    payee: Optional[PayoutPayeeV3] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee') }})
    payment_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMemo') }})
    payment_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMetadata') }})
    payor_payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorPaymentId') }})
    remote_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteId') }})
    remote_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteSystemId') }})
    source_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAccountName') }})
    status: Optional[PaymentV3StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    transmission_type: Optional[TransmissionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transmissionType') }})
    withdrawable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('withdrawable') }})
    
