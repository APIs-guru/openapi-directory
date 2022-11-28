from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AcceptedPaymentV3:
    amount: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyType') }})
    payor_payment_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorPaymentId') }})
    remote_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteId') }})
    source_account_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAccountName') }})
    payment_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMemo') }})
    payment_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMetadata') }})
    remote_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteSystemId') }})
    
