from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class AdditionalRecipient:
    amount_money: money.Money = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    location_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    receivable_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receivable_id' }})
    
