from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sim_ip_address_enum_ip_address_version_enum


@dataclass_json
@dataclass
class SupersimV1SimSimIPAddress:
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_address' }})
    ip_address_version: Optional[sim_ip_address_enum_ip_address_version_enum.SimIPAddressEnumIPAddressVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_address_version' }})
    
