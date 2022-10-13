from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CatalogPricingRule:
    apply_products_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apply_products_id' }})
    customer_group_ids_any: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_group_ids_any' }})
    discount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discount_id' }})
    exclude_products_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclude_products_id' }})
    exclude_strategy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclude_strategy' }})
    match_products_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'match_products_id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    time_period_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_period_ids' }})
    valid_from_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valid_from_date' }})
    valid_from_local_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valid_from_local_time' }})
    valid_until_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valid_until_date' }})
    valid_until_local_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valid_until_local_time' }})
    
