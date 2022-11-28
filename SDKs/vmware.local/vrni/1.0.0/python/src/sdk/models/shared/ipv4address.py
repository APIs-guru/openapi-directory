from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IPV4Address:
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address') }})
    netmask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('netmask') }})
    network_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_address') }})
    
