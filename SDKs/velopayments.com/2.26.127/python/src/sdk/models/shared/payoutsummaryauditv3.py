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
class PayoutSummaryAuditV3:
    payout_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutId') }})
    status: PayoutStatusV3Enum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    submitted_date_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submittedDateTime') }})
    fx_summaries: Optional[List[FxSummaryV3]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fxSummaries') }})
    instructed_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instructedDateTime') }})
    payor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorId') }})
    payout_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payoutMemo') }})
    source_account_summary: Optional[List[SourceAccountSummaryV3]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAccountSummary') }})
    total_failed_payments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalFailedPayments') }})
    total_incomplete_payments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalIncompletePayments') }})
    total_payments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPayments') }})
    withdrawn_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('withdrawnDateTime') }})
    
