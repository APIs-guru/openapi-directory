from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class ChargeRequestAdditionalRecipient:
    amount_money: money.Money = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    location_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    
