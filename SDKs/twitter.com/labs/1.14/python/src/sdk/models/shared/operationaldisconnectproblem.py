from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class OperationalDisconnectProblemDisconnectTypeEnum(str, Enum):
    OPERATIONAL_DISCONNECT = "OperationalDisconnect"
    UPSTREAM_OPERATIONAL_DISCONNECT = "UpstreamOperationalDisconnect"
    FORCE_DISCONNECT = "ForceDisconnect"
    UPSTREAM_UNCLEAN_DISCONNECT = "UpstreamUncleanDisconnect"
    SLOW_READER = "SlowReader"
    INTERNAL_ERROR = "InternalError"
    PACKAGE_UPGRADED = "PackageUpgraded"
    PACKAGE_DOWNGRADED = "PackageDowngraded"
    CLIENT_APPLICATION_STATE_DEGRADED = "ClientApplicationStateDegraded"


@dataclass_json
@dataclass
class OperationalDisconnectProblem:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    disconnect_type: Optional[OperationalDisconnectProblemDisconnectTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disconnect_type' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
