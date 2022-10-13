from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class GiftCardActivityActivate:
    amount_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    buyer_payment_instrument_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyer_payment_instrument_ids' }})
    line_item_uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line_item_uid' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_id' }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference_id' }})
    
