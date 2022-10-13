from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import money
from . import money


@dataclass_json
@dataclass
class LoyaltyProgramRewardDefinition:
    catalog_object_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_object_ids' }})
    discount_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discount_type' }})
    fixed_discount_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixed_discount_money' }})
    max_discount_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_discount_money' }})
    percentage_discount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage_discount' }})
    scope: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    
