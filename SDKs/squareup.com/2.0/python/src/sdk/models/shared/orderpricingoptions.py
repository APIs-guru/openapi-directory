from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrderPricingOptions:
    auto_apply_discounts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_apply_discounts' }})
    auto_apply_taxes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_apply_taxes' }})
    
