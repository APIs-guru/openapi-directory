from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class CatalogDiscount:
    amount_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    discount_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discount_type' }})
    label_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_color' }})
    modify_tax_basis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modify_tax_basis' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    pin_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pin_required' }})
    
