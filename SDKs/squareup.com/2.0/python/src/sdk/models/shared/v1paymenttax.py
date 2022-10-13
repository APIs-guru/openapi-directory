from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import v1money
from . import error


@dataclass_json
@dataclass
class V1PaymentTax:
    applied_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_money' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    fee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fee_id' }})
    inclusion_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inclusion_type' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    
