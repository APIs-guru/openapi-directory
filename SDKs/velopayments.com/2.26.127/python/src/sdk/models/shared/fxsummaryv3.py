from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FxSummaryV3FundingStatusEnum(str, Enum):
    FUNDED = "FUNDED"
    INSTRUCTED = "INSTRUCTED"
    UNFUNDED = "UNFUNDED"

class FxSummaryV3StatusEnum(str, Enum):
    UNQUOTED = "UNQUOTED"
    QUOTED = "QUOTED"
    EXPIRED = "EXPIRED"
    EXECUTED = "EXECUTED"


@dataclass_json
@dataclass
class FxSummaryV3:
    creation_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    funding_status: FxSummaryV3FundingStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingStatus') }})
    inverted_rate: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invertedRate') }})
    quote_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quoteId') }})
    rate: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    status: FxSummaryV3StatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    total_cost: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCost') }})
    total_payment_amount: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPaymentAmount') }})
    payment_currency: Optional[PaymentAuditCurrencyV3Enum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentCurrency') }})
    source_currency: Optional[PaymentAuditCurrencyV3Enum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceCurrency') }})
    
