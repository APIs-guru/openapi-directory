from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PaymentEventResponseV3EventTypeEnum(str, Enum):
    PAYOUT_SUBMITTED = "PAYOUT_SUBMITTED"
    PAYOUT_COMPLETED = "PAYOUT_COMPLETED"
    PAYOUT_INSTRUCTED_V3 = "PAYOUT_INSTRUCTED_V3"
    BANK_PAYMENT_REQUESTED = "BANK_PAYMENT_REQUESTED"
    SOURCE_AMOUNT_CONFIRMED = "SOURCE_AMOUNT_CONFIRMED"
    PAYMENT_SUBMITTED = "PAYMENT_SUBMITTED"
    PAYMENT_SUBMITTED_ACCEPTED = "PAYMENT_SUBMITTED_ACCEPTED"
    PAYMENT_SUBMITTED_REJECTED = "PAYMENT_SUBMITTED_REJECTED"
    PAYMENT_CONFIRMED = "PAYMENT_CONFIRMED"
    PAYMENT_AWAITING_FUNDS = "PAYMENT_AWAITING_FUNDS"
    PAYMENT_FUNDED = "PAYMENT_FUNDED"
    PAYMENT_UNFUNDED = "PAYMENT_UNFUNDED"
    PAYMENT_FAILED = "PAYMENT_FAILED"
    ACH_SUBMITTED_TO_ODFI = "ACH_SUBMITTED_TO_ODFI"
    PAYMENT_ACCEPTED_BY_RAILS = "PAYMENT_ACCEPTED_BY_RAILS"
    ACH_RETURN_RECEIVED = "ACH_RETURN_RECEIVED"
    RETURN_PAYMENT_FUNDING_REQUESTED = "RETURN_PAYMENT_FUNDING_REQUESTED"
    PAYOUT_BATCH_EXECUTED = "PAYOUT_BATCH_EXECUTED"
    PAYOUT_BATCH_QUOTE_EXPIRED = "PAYOUT_BATCH_QUOTE_EXPIRED"
    PAYOUT_BATCH_FUNDED = "PAYOUT_BATCH_FUNDED"
    PAYOUT_BATCH_FUNDS_RETURN_REQUEST = "PAYOUT_BATCH_FUNDS_RETURN_REQUEST"
    PAYOUT_BATCH_FUNDS_RETURNED = "PAYOUT_BATCH_FUNDS_RETURNED"
    PAYOUT_FUNDS_REQUEST = "PAYOUT_FUNDS_REQUEST"
    PAYOUT_FUNDS_GRANTED = "PAYOUT_FUNDS_GRANTED"
    PAYOUT_FUNDS_DENIED = "PAYOUT_FUNDS_DENIED"
    PAYOUT_BATCH_QUOTED = "PAYOUT_BATCH_QUOTED"
    PAYOUT_QUOTED = "PAYOUT_QUOTED"
    ACH_PAYMENT_RETURN_CANCELLED = "ACH_PAYMENT_RETURN_CANCELLED"
    RETURN_PAYMENT_CANCELLATION_REQUESTED = "RETURN_PAYMENT_CANCELLATION_REQUESTED"
    PAYOUT_WITHDRAWN = "PAYOUT_WITHDRAWN"


@dataclass_json
@dataclass
class PaymentEventResponseV3:
    event_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventId') }})
    event_type: PaymentEventResponseV3EventTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    iban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iban') }})
    payment_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentAmount') }})
    payment_currency: Optional[PaymentAuditCurrencyV3Enum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentCurrency') }})
    principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principal') }})
    routing_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routingNumber') }})
    source_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAmount') }})
    source_currency: Optional[PaymentAuditCurrencyV3Enum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceCurrency') }})
    
