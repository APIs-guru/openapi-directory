from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class Subscription:
    canceled_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canceled_date' }})
    card_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_id' }})
    charged_through_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'charged_through_date' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_id' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    invoice_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoice_ids' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan_id' }})
    price_override_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_override_money' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_date' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tax_percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_percentage' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
