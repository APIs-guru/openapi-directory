from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class OrderLineItemAppliedDiscount:
    applied_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_money' }})
    discount_uid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discount_uid' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    
