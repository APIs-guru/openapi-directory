from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import acceptedpaymentv3
from . import sourceaccountv3
from . import quotefxsummaryv3
from . import rejectedpaymentv3


@dataclass_json
@dataclass
class PayoutSummaryResponseV3:
    accepted_payments: List[acceptedpaymentv3.AcceptedPaymentV3] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceptedPayments' }})
    accounts: List[sourceaccountv3.SourceAccountV3] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts' }})
    fx_summaries: List[quotefxsummaryv3.QuoteFxSummaryV3] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fxSummaries' }})
    payments_accepted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentsAccepted' }})
    payments_rejected: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentsRejected' }})
    payments_submitted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentsSubmitted' }})
    payments_withdrawn: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentsWithdrawn' }})
    payout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payoutId' }})
    rejected_payments: List[rejectedpaymentv3.RejectedPaymentV3] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectedPayments' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
