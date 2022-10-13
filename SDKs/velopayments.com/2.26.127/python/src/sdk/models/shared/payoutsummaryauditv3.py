from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import fxsummaryv3
from . import sourceaccountsummaryv3
from . import payoutstatusv3_enum


@dataclass_json
@dataclass
class PayoutSummaryAuditV3:
    fx_summaries: Optional[List[fxsummaryv3.FxSummaryV3]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fxSummaries' }})
    instructed_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instructedDateTime' }})
    payor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorId' }})
    payout_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payoutId' }})
    payout_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payoutMemo' }})
    source_account_summary: Optional[List[sourceaccountsummaryv3.SourceAccountSummaryV3]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceAccountSummary' }})
    status: payoutstatusv3_enum.PayoutStatusV3Enum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    submitted_date_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submittedDateTime' }})
    total_failed_payments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalFailedPayments' }})
    total_incomplete_payments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalIncompletePayments' }})
    total_payments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPayments' }})
    withdrawn_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'withdrawnDateTime' }})
    
