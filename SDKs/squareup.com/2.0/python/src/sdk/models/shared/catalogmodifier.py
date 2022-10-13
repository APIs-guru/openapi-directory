from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class CatalogModifier:
    modifier_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifier_list_id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ordinal: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ordinal' }})
    price_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_money' }})
    
