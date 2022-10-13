from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import chargerequestadditionalrecipient
from . import createorderrequest
from . import address


@dataclass_json
@dataclass
class CreateCheckoutRequest:
    additional_recipients: Optional[List[chargerequestadditionalrecipient.ChargeRequestAdditionalRecipient]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additional_recipients' }})
    ask_for_shipping_address: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ask_for_shipping_address' }})
    idempotency_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    merchant_support_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchant_support_email' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    order: createorderrequest.CreateOrderRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    pre_populate_buyer_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pre_populate_buyer_email' }})
    pre_populate_shipping_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pre_populate_shipping_address' }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_url' }})
    
