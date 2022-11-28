from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DiscoveredParticipantCodeEnum(str, Enum):
    OK = "OK"
    NOK = "NOK"


@dataclass_json
@dataclass
class DiscoveredParticipant:
    r"""DiscoveredParticipant
    A public identifier for this customer.
    """
    
    code: Optional[DiscoveredParticipantCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    
