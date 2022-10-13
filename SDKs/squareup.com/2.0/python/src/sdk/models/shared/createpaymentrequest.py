from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money
from . import money
from . import address
from . import cashpaymentdetails
from . import externalpaymentdetails
from . import address
from . import money


@dataclass_json
@dataclass
class CreatePaymentRequest:
    accept_partial_authorization: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accept_partial_authorization' }})
    amount_money: money.Money = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    app_fee_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app_fee_money' }})
    autocomplete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autocomplete' }})
    billing_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_address' }})
    buyer_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyer_email_address' }})
    cash_details: Optional[cashpaymentdetails.CashPaymentDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cash_details' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_id' }})
    delay_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delay_duration' }})
    external_details: Optional[externalpaymentdetails.ExternalPaymentDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_details' }})
    idempotency_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_id' }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference_id' }})
    shipping_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_address' }})
    source_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_id' }})
    statement_description_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statement_description_identifier' }})
    tip_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tip_money' }})
    verification_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification_token' }})
    
