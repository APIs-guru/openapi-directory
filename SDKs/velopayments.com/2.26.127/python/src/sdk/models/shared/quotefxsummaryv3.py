from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expiry_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiryTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    funding_status: QuoteFxSummaryV3FundingStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundingStatus' }})
    inverted_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invertedRate' }})
    payment_currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentCurrency' }})
    quote_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quoteId' }})
    rate: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    source_currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceCurrency' }})
    status: QuoteFxSummaryV3StatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    total_payment_amount: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPaymentAmount' }})
    total_source_amount: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSourceAmount' }})
    
