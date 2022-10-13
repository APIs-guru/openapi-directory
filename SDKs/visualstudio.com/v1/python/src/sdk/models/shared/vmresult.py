from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import vmconnectioninfo
from . import provisioningstatusresult


@dataclass_json
@dataclass
class VMResult:
    connection: Optional[vmconnectioninfo.VMConnectionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection' }})
    provisioning_status: Optional[provisioningstatusresult.ProvisioningStatusResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provisioningStatus' }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
