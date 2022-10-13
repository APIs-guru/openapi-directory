from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money
from . import money
from . import money
from . import money
from . import money


@dataclass_json
@dataclass
class OrderMoneyAmounts:
    discount_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discount_money' }})
    service_charge_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_charge_money' }})
    tax_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_money' }})
    tip_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tip_money' }})
    total_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_money' }})
    
