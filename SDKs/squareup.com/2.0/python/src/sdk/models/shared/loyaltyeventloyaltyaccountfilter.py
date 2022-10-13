from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LoyaltyEventLoyaltyAccountFilter:
    loyalty_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loyalty_account_id' }})
    
