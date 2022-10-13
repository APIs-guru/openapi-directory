from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import paymenteventresponse
from . import paymentauditcurrency_enum
from . import paymentauditcurrency_enum

class PaymentResponseV4FundingStatusEnum(str, Enum):
    FUNDED = "FUNDED"
    INSTRUCTED = "INSTRUCTED"
    UNFUNDED = "UNFUNDED"

class PaymentResponseV4StatusEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    AWAITING_FUNDS = "AWAITING_FUNDS"
    FUNDED = "FUNDED"
    UNFUNDED = "UNFUNDED"
    BANK_PAYMENT_REQUESTED = "BANK_PAYMENT_REQUESTED"
    REJECTED = "REJECTED"
    ACCEPTED_BY_RAILS = "ACCEPTED_BY_RAILS"
    CONFIRMED = "CONFIRMED"
    RETURNED = "RETURNED"
    WITHDRAWN = "WITHDRAWN"


@dataclass_json
@dataclass
class PaymentResponseV4:
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountName' }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountNumber' }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryCode' }})
    events: List[paymenteventresponse.PaymentEventResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    filename_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filenameReference' }})
    funding_status: PaymentResponseV4FundingStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundingStatus' }})
    iban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iban' }})
    individual_identification_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'individualIdentificationNumber' }})
    inverted_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invertedRate' }})
    is_payment_ccy_base_ccy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPaymentCcyBaseCcy' }})
    payee_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeId' }})
    payment_amount: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentAmount' }})
    payment_channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentChannelId' }})
    payment_channel_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentChannelName' }})
    payment_currency: Optional[paymentauditcurrency_enum.PaymentAuditCurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentCurrency' }})
    payment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentId' }})
    payment_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMemo' }})
    payment_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMetadata' }})
    payment_tracking_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentTrackingReference' }})
    payor_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorId' }})
    payor_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorName' }})
    payor_payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorPaymentId' }})
    payout: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payout' }})
    quote_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quoteId' }})
    rails_batch_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'railsBatchId' }})
    rails_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'railsId' }})
    rails_payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'railsPaymentId' }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    rejection_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectionReason' }})
    remote_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteId' }})
    remote_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteSystemId' }})
    remote_system_payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteSystemPaymentId' }})
    return_cost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnCost' }})
    return_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnReason' }})
    routing_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routingNumber' }})
    source_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceAccountId' }})
    source_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceAccountName' }})
    source_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceAmount' }})
    source_currency: Optional[paymentauditcurrency_enum.PaymentAuditCurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceCurrency' }})
    status: PaymentResponseV4StatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    submitted_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submittedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    trace_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traceNumber' }})
    transmission_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transmissionType' }})
    withdrawable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'withdrawable' }})
    withdrawn_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'withdrawnReason' }})
    
