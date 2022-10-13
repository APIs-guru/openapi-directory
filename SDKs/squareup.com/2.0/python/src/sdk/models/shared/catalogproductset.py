from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CatalogProductSet:
    all_products: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'all_products' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product_ids_all: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_ids_all' }})
    product_ids_any: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_ids_any' }})
    quantity_exact: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity_exact' }})
    quantity_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity_max' }})
    quantity_min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity_min' }})
    
