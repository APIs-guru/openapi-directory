from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class SupersimV1SimSimIPAddress:
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_address' }})
    ip_address_version: Optional[shared.SimIPAddressEnumIPAddressVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_address_version' }})
    
