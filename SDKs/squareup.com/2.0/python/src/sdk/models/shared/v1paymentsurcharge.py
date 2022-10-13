from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import v1money
from . import v1money
from . import v1paymenttax


@dataclass_json
@dataclass
class V1PaymentSurcharge:
    amount_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    applied_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_money' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    surcharge_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'surcharge_id' }})
    taxable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxable' }})
    taxes: Optional[List[v1paymenttax.V1PaymentTax]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxes' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
