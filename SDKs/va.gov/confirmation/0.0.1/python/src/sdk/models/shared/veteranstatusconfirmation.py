from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class VeteranStatusConfirmationVeteranStatusEnum(str, Enum):
    CONFIRMED = "confirmed"
    NOT_CONFIRMED = "not confirmed"


@dataclass_json
@dataclass
class VeteranStatusConfirmation:
    veteran_status: Optional[VeteranStatusConfirmationVeteranStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'veteran_status' }})
    
