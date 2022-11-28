from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VMResult:
    connection: Optional[VMConnectionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection') }})
    provisioning_status: Optional[ProvisioningStatusResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioningStatus') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
