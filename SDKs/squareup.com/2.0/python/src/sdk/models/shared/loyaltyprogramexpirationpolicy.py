from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LoyaltyProgramExpirationPolicy:
    expiration_duration: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration_duration' }})
    
