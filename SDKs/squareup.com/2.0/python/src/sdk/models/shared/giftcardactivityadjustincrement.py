from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class GiftCardActivityAdjustIncrement:
    amount_money: money.Money = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    reason: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    
