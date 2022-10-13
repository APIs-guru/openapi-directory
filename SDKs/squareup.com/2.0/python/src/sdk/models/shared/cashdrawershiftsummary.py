from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money
from . import money
from . import money


@dataclass_json
@dataclass
class CashDrawerShiftSummary:
    closed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed_at' }})
    closed_cash_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed_cash_money' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    ended_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ended_at' }})
    expected_cash_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expected_cash_money' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    opened_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opened_at' }})
    opened_cash_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opened_cash_money' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
