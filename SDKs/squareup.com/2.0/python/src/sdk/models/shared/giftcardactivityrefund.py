from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class GiftCardActivityRefund:
    amount_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_id' }})
    redeem_activity_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redeem_activity_id' }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference_id' }})
    
