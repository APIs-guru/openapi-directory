from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money
from . import money


@dataclass_json
@dataclass
class OrderReturnLineItemModifier:
    base_price_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base_price_money' }})
    catalog_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_object_id' }})
    catalog_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_version' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source_modifier_uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_modifier_uid' }})
    total_price_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_price_money' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    
