from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""OperationalDisconnectProblem
    You have been disconnected for operational reasons.
    """
    
    detail: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    disconnect_type: Optional[OperationalDisconnectProblemDisconnectTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disconnect_type') }})
    
