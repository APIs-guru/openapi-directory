from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RejectedPaymentV3:
    amount: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyType') }})
    payor_payment_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorPaymentId') }})
    reason: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    remote_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteId') }})
    source_account_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAccountName') }})
    line_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineNumber') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    payment_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMetadata') }})
    reason_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonCode') }})
    remote_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteSystemId') }})
    
