from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LoyaltyEventExpirePoints:
    loyalty_program_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loyalty_program_id' }})
    points: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'points' }})
    
