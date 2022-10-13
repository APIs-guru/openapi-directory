from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import v1orderhistoryentry
from . import address
from . import v1money
from . import v1tender
from . import v1money
from . import v1money
from . import v1money
from . import v1money


@dataclass_json
@dataclass
class V1Order:
    btc_price_satoshi: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'btc_price_satoshi' }})
    btc_receive_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'btc_receive_address' }})
    buyer_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyer_email' }})
    buyer_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyer_note' }})
    canceled_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canceled_note' }})
    completed_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completed_note' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    order_history: Optional[List[v1orderhistoryentry.V1OrderHistoryEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_history' }})
    payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_id' }})
    promo_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promo_code' }})
    recipient_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient_name' }})
    recipient_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient_phone_number' }})
    refunded_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunded_note' }})
    shipping_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_address' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    subtotal_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtotal_money' }})
    tender: Optional[v1tender.V1Tender] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tender' }})
    total_discount_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_discount_money' }})
    total_price_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_price_money' }})
    total_shipping_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_shipping_money' }})
    total_tax_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_tax_money' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    
