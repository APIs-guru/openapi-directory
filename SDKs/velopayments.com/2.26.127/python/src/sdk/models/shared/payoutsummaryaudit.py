from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import fxsummary
from . import payouttype_enum
from . import sourceaccountsummary
from . import payoutstatus_enum


@dataclass_json
@dataclass
class PayoutSummaryAudit:
    date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fx_summaries: Optional[List[fxsummary.FxSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fxSummaries' }})
    instructed_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instructedDateTime' }})
    payor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorId' }})
    payor_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorName' }})
    payout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payoutId' }})
    payout_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payoutMemo' }})
    payout_type: payouttype_enum.PayoutTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payoutType' }})
    source_account_summary: Optional[List[sourceaccountsummary.SourceAccountSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceAccountSummary' }})
    status: payoutstatus_enum.PayoutStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    submitted_date_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submittedDateTime' }})
    total_incomplete_payments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalIncompletePayments' }})
    total_payments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPayments' }})
    total_returned_payments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalReturnedPayments' }})
    total_withdrawn_payments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalWithdrawnPayments' }})
    withdrawn_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'withdrawnDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
