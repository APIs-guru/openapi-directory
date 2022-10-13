from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class ExternalPaymentDetails:
    source: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    source_fee_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_fee_money' }})
    source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
