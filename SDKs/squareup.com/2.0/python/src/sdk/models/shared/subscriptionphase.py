from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class SubscriptionPhase:
    cadence: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cadence' }})
    ordinal: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ordinal' }})
    periods: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periods' }})
    recurring_price_money: money.Money = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recurring_price_money' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    
