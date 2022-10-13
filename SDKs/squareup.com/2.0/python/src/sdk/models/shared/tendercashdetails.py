from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money
from . import money


@dataclass_json
@dataclass
class TenderCashDetails:
    buyer_tendered_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyer_tendered_money' }})
    change_back_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'change_back_money' }})
    
