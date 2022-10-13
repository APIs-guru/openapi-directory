from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class ItemVariationLocationOverrides:
    inventory_alert_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventory_alert_threshold' }})
    inventory_alert_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventory_alert_type' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    price_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_money' }})
    pricing_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricing_type' }})
    track_inventory: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'track_inventory' }})
    
