from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreatePayoutRequestV3:
    payments: List[PaymentInstructionV3] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payments') }})
    payout_from_payor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutFromPayorId') }})
    payout_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutMemo') }})
    payout_to_payor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutToPayorId') }})
    
