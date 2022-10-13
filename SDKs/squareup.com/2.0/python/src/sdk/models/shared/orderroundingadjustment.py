from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class OrderRoundingAdjustment:
    amount_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    
