from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import money
from . import money


@dataclass_json
@dataclass
class OrderLineItemDiscount:
    amount_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    applied_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_money' }})
    catalog_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_object_id' }})
    catalog_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_version' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    pricing_rule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricing_rule_id' }})
    reward_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reward_ids' }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    
