from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class QuoteFxSummaryV3FundingStatusEnum(str, Enum):
    UNFUNDED = "UNFUNDED"
    INSTRUCTED = "INSTRUCTED"
    FUNDED = "FUNDED"

class QuoteFxSummaryV3StatusEnum(str, Enum):
    UNQUOTED = "UNQUOTED"
    QUOTED = "QUOTED"
    EXPIRED = "EXPIRED"
    EXECUTED = "EXECUTED"
    REJECTED = "REJECTED"


@dataclass_json
@dataclass
class QuoteFxSummaryV3:
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    funding_status: QuoteFxSummaryV3FundingStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingStatus') }})
    payment_currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentCurrency') }})
    quote_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quoteId') }})
    rate: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    source_currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceCurrency') }})
    status: QuoteFxSummaryV3StatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    total_payment_amount: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPaymentAmount') }})
    total_source_amount: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSourceAmount') }})
    expiry_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    inverted_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invertedRate') }})
    
