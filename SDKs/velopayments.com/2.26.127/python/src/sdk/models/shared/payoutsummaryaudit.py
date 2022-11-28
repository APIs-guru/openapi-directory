from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PayoutSummaryAudit:
    payor_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorName') }})
    payout_type: PayoutTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutType') }})
    status: PayoutStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    submitted_date_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submittedDateTime') }})
    date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fx_summaries: Optional[List[FxSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fxSummaries') }})
    instructed_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instructedDateTime') }})
    payor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorId') }})
    payout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutId') }})
    payout_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutMemo') }})
    source_account_summary: Optional[List[SourceAccountSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAccountSummary') }})
    total_incomplete_payments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalIncompletePayments') }})
    total_payments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPayments') }})
    total_returned_payments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalReturnedPayments') }})
    total_withdrawn_payments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalWithdrawnPayments') }})
    withdrawn_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('withdrawnDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
