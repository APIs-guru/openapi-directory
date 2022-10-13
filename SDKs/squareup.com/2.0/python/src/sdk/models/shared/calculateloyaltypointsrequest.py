from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class CalculateLoyaltyPointsRequest:
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_id' }})
    transaction_amount_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_amount_money' }})
    
