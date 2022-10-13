from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import additionalrecipient
from . import order
from . import address


@dataclass_json
@dataclass
class Checkout:
    additional_recipients: Optional[List[additionalrecipient.AdditionalRecipient]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additional_recipients' }})
    ask_for_shipping_address: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ask_for_shipping_address' }})
    checkout_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkout_page_url' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    merchant_support_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchant_support_email' }})
    order: Optional[order.Order] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    pre_populate_buyer_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pre_populate_buyer_email' }})
    pre_populate_shipping_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pre_populate_shipping_address' }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_url' }})
    
