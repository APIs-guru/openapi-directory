from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class CreateSubscriptionRequest:
    canceled_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canceled_date' }})
    card_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_id' }})
    customer_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_id' }})
    idempotency_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    location_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    plan_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan_id' }})
    price_override_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_override_money' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_date' }})
    tax_percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_percentage' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    
