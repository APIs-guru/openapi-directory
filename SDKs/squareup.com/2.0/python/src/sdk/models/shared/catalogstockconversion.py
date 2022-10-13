from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CatalogStockConversion:
    nonstockable_quantity: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonstockable_quantity' }})
    stockable_item_variation_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stockable_item_variation_id' }})
    stockable_quantity: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stockable_quantity' }})
    
