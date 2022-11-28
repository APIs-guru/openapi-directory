from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PayeeDelta2:
    payee_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeId') }})
    remote_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteId') }})
    dba_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dbaName') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    onboarded_status: Optional[OnboardedStatus2Enum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onboardedStatus') }})
    payee_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeCountry') }})
    
