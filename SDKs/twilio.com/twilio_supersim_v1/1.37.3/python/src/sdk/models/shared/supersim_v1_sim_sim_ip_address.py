from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SupersimV1SimSimIPAddress:
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address') }})
    ip_address_version: Optional[SimIPAddressEnumIPAddressVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address_version') }})
    
