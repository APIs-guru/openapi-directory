from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import paymentinstructionv3


@dataclass_json
@dataclass
class CreatePayoutRequestV3:
    payments: List[paymentinstructionv3.PaymentInstructionV3] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payments' }})
    payout_from_payor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payoutFromPayorId' }})
    payout_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payoutMemo' }})
    payout_to_payor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payoutToPayorId' }})
    
