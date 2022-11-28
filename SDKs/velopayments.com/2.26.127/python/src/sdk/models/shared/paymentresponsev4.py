from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    events: List[PaymentEventResponse] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    funding_status: PaymentResponseV4FundingStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingStatus') }})
    payee_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeId') }})
    payment_amount: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentAmount') }})
    payment_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentId') }})
    payor_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorId') }})
    quote_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quoteId') }})
    rails_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('railsId') }})
    source_account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAccountId') }})
    status: PaymentResponseV4StatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    submitted_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submittedDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    filename_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filenameReference') }})
    iban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iban') }})
    individual_identification_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individualIdentificationNumber') }})
    inverted_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invertedRate') }})
    is_payment_ccy_base_ccy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPaymentCcyBaseCcy') }})
    payment_channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentChannelId') }})
    payment_channel_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentChannelName') }})
    payment_currency: Optional[PaymentAuditCurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentCurrency') }})
    payment_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMemo') }})
    payment_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMetadata') }})
    payment_tracking_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentTrackingReference') }})
    payor_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorName') }})
    payor_payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorPaymentId') }})
    payout: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payout') }})
    rails_batch_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('railsBatchId') }})
    rails_payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('railsPaymentId') }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    rejection_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectionReason') }})
    remote_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteId') }})
    remote_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteSystemId') }})
    remote_system_payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteSystemPaymentId') }})
    return_cost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnCost') }})
    return_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnReason') }})
    routing_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routingNumber') }})
    source_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAccountName') }})
    source_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAmount') }})
    source_currency: Optional[PaymentAuditCurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceCurrency') }})
    trace_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traceNumber') }})
    transmission_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transmissionType') }})
    withdrawable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('withdrawable') }})
    withdrawn_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('withdrawnReason') }})
    
