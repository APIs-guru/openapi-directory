from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import money
from . import money


@dataclass_json
@dataclass
class LoyaltyProgramAccrualRule:
    accrual_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accrual_type' }})
    catalog_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_object_id' }})
    excluded_category_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excluded_category_ids' }})
    excluded_item_variation_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excluded_item_variation_ids' }})
    points: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'points' }})
    spend_amount_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spend_amount_money' }})
    visit_minimum_amount_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visit_minimum_amount_money' }})
    
