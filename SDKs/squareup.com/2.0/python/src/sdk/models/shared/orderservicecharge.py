from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import money
from . import money
from . import orderlineitemappliedtax
from . import money
from . import money


@dataclass_json
@dataclass
class OrderServiceCharge:
    amount_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    applied_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_money' }})
    applied_taxes: Optional[List[orderlineitemappliedtax.OrderLineItemAppliedTax]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_taxes' }})
    calculation_phase: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calculation_phase' }})
    catalog_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_object_id' }})
    catalog_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_version' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    taxable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxable' }})
    total_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_money' }})
    total_tax_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_tax_money' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    
