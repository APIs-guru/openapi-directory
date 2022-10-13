from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class GiftCard:
    balance_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance_money' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    customer_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_ids' }})
    gan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gan' }})
    gan_source: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gan_source' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    state: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    type: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
