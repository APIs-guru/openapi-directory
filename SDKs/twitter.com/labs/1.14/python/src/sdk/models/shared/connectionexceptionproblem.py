from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ConnectionExceptionProblemConnectionIssueEnum(str, Enum):
    TOO_MANY_CONNECTIONS = "TooManyConnections"
    PROVISIONING_SUBSCRIPTION = "ProvisioningSubscription"


@dataclass_json
@dataclass
class ConnectionExceptionProblem:
    connection_issue: Optional[ConnectionExceptionProblemConnectionIssueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection_issue' }})
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
