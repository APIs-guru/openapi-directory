from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IPV4Address:
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_address' }})
    netmask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'netmask' }})
    network_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_address' }})
    
