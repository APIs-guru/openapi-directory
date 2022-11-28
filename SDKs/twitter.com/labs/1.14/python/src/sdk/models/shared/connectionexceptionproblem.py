from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ConnectionExceptionProblemConnectionIssueEnum(str, Enum):
    TOO_MANY_CONNECTIONS = "TooManyConnections"
    PROVISIONING_SUBSCRIPTION = "ProvisioningSubscription"


@dataclass_json
@dataclass
class ConnectionExceptionProblem:
    r"""ConnectionExceptionProblem
    A problem that indicates something is wrong with the connection
    """
    
    detail: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    connection_issue: Optional[ConnectionExceptionProblemConnectionIssueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_issue') }})
    
