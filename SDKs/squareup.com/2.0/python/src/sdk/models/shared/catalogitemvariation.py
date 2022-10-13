from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import catalogitemoptionvalueforitemvariation
from . import itemvariationlocationoverrides
from . import money
from . import catalogstockconversion


@dataclass_json
@dataclass
class CatalogItemVariation:
    available_for_booking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_for_booking' }})
    inventory_alert_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventory_alert_threshold' }})
    inventory_alert_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventory_alert_type' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_id' }})
    item_option_values: Optional[List[catalogitemoptionvalueforitemvariation.CatalogItemOptionValueForItemVariation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_option_values' }})
    location_overrides: Optional[List[itemvariationlocationoverrides.ItemVariationLocationOverrides]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_overrides' }})
    measurement_unit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurement_unit_id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ordinal: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ordinal' }})
    price_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_money' }})
    pricing_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricing_type' }})
    service_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_duration' }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    stockable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stockable' }})
    stockable_conversion: Optional[catalogstockconversion.CatalogStockConversion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stockable_conversion' }})
    team_member_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_member_ids' }})
    track_inventory: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'track_inventory' }})
    upc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upc' }})
    user_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_data' }})
    
