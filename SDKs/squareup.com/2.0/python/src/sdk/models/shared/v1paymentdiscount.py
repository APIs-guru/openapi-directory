from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import v1money


@dataclass_json
@dataclass
class V1PaymentDiscount:
    applied_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_money' }})
    discount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discount_id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
