from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import paymenteventresponsev3
from . import paymentauditcurrencyv3_enum
from . import paymentauditcurrencyv3_enum

class PaymentResponseV3FundingStatusEnum(str, Enum):
    FUNDED = "FUNDED"
    INSTRUCTED = "INSTRUCTED"
    UNFUNDED = "UNFUNDED"

class PaymentResponseV3StatusEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    AWAITING_FUNDS = "AWAITING_FUNDS"
    FUNDED = "FUNDED"
    UNFUNDED = "UNFUNDED"
    BANK_PAYMENT_REQUESTED = "BANK_PAYMENT_REQUESTED"
    REJECTED = "REJECTED"
    ACCEPTED_BY_RAILS = "ACCEPTED_BY_RAILS"
    CONFIRMED = "CONFIRMED"
    FAILED = "FAILED"
    WITHDRAWN = "WITHDRAWN"


@dataclass_json
@dataclass
class PaymentResponseV3:
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountName' }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountNumber' }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryCode' }})
    events: List[paymenteventresponsev3.PaymentEventResponseV3] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    filename_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filenameReference' }})
    funding_status: PaymentResponseV3FundingStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundingStatus' }})
    iban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iban' }})
    individual_identification_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'individualIdentificationNumber' }})
    inverted_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invertedRate' }})
    payee_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeId' }})
    payment_amount: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentAmount' }})
    payment_channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentChannelId' }})
    payment_channel_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentChannelName' }})
    payment_currency: Optional[paymentauditcurrencyv3_enum.PaymentAuditCurrencyV3Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentCurrency' }})
    payment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentId' }})
    payment_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMemo' }})
    payor_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorId' }})
    payor_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorName' }})
    payor_payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorPaymentId' }})
    quote_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quoteId' }})
    rails_batch_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'railsBatchId' }})
    rails_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'railsId' }})
    rails_payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'railsPaymentId' }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    rejection_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectionReason' }})
    remote_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteId' }})
    return_cost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnCost' }})
    return_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnReason' }})
    routing_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routingNumber' }})
    source_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceAccountId' }})
    source_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceAccountName' }})
    source_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceAmount' }})
    source_currency: Optional[paymentauditcurrencyv3_enum.PaymentAuditCurrencyV3Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceCurrency' }})
    status: PaymentResponseV3StatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    submitted_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submittedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    trace_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traceNumber' }})
    
