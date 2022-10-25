from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DiscoveredParticipantCodeEnum(str, Enum):
    OK = "OK"
    NOK = "NOK"


@dataclass_json
@dataclass
class DiscoveredParticipant:
    code: Optional[DiscoveredParticipantCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    
