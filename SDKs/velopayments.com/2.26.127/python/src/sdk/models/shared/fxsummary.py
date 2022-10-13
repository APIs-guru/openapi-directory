from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import paymentauditcurrency_enum
from . import paymentauditcurrency_enum

class FxSummaryFundingStatusEnum(str, Enum):
    FUNDED = "FUNDED"
    INSTRUCTED = "INSTRUCTED"
    UNFUNDED = "UNFUNDED"

class FxSummaryStatusEnum(str, Enum):
    UNQUOTED = "UNQUOTED"
    QUOTED = "QUOTED"
    EXPIRED = "EXPIRED"
    EXECUTED = "EXECUTED"


@dataclass_json
@dataclass
class FxSummary:
    creation_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    funding_status: FxSummaryFundingStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundingStatus' }})
    inverted_rate: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invertedRate' }})
    payment_currency: Optional[paymentauditcurrency_enum.PaymentAuditCurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentCurrency' }})
    quote_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quoteId' }})
    rate: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    source_currency: Optional[paymentauditcurrency_enum.PaymentAuditCurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceCurrency' }})
    status: FxSummaryStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    total_cost: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCost' }})
    total_payment_amount: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPaymentAmount' }})
    
