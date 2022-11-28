from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PaymentInstructionV3:
    r"""PaymentInstructionV3
    Instruction for creating a payment
    """
    
    amount: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    remote_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteId') }})
    source_account_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAccountName') }})
    payment_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMemo') }})
    payment_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMetadata') }})
    payor_payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorPaymentId') }})
    remote_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteSystemId') }})
    transmission_type: Optional[TransmissionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transmissionType') }})
    
