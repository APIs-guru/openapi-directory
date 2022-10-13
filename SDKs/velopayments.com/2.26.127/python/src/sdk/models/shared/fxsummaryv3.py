from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import paymentauditcurrencyv3_enum
from . import paymentauditcurrencyv3_enum

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
    creation_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    funding_status: FxSummaryV3FundingStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundingStatus' }})
    inverted_rate: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invertedRate' }})
    payment_currency: Optional[paymentauditcurrencyv3_enum.PaymentAuditCurrencyV3Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentCurrency' }})
    quote_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quoteId' }})
    rate: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    source_currency: Optional[paymentauditcurrencyv3_enum.PaymentAuditCurrencyV3Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceCurrency' }})
    status: FxSummaryV3StatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    total_cost: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCost' }})
    total_payment_amount: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPaymentAmount' }})
    
