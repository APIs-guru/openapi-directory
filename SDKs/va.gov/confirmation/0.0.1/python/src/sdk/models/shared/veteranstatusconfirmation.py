from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VeteranStatusConfirmationVeteranStatusEnum(str, Enum):
    CONFIRMED = "confirmed"
    NOT_CONFIRMED = "not confirmed"


@dataclass_json
@dataclass
class VeteranStatusConfirmation:
    r"""VeteranStatusConfirmation
    Veteran status confirmation for an individual
    """
    
    veteran_status: Optional[VeteranStatusConfirmationVeteranStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('veteran_status') }})
    
