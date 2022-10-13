from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LoyaltyAccountExpiringPointDeadline:
    expires_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at' }})
    points: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'points' }})
    
