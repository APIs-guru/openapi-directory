from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import additionalrecipient
from . import money
from . import address
from . import address


@dataclass_json
@dataclass
class ChargeRequest:
    additional_recipients: Optional[List[additionalrecipient.AdditionalRecipient]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additional_recipients' }})
    amount_money: money.Money = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    billing_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_address' }})
    buyer_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyer_email_address' }})
    card_nonce: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_nonce' }})
    customer_card_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_card_id' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_id' }})
    delay_capture: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delay_capture' }})
    idempotency_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_id' }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference_id' }})
    shipping_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_address' }})
    verification_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification_token' }})
    
