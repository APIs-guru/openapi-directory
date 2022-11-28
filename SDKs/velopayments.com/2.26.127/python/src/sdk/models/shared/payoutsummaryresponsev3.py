from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PayoutSummaryResponseV3:
    accepted_payments: List[AcceptedPaymentV3] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceptedPayments') }})
    accounts: List[SourceAccountV3] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    fx_summaries: List[QuoteFxSummaryV3] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fxSummaries') }})
    payments_withdrawn: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentsWithdrawn') }})
    rejected_payments: List[RejectedPaymentV3] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectedPayments') }})
    payments_accepted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentsAccepted') }})
    payments_rejected: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentsRejected') }})
    payments_submitted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentsSubmitted') }})
    payout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutId') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
