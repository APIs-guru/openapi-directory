from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import failedsubmission

class QueryBatchResponseStatusEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    ACCEPTED = "ACCEPTED"


@dataclass_json
@dataclass
class QueryBatchResponse:
    failure_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCount' }})
    failures: Optional[List[failedsubmission.FailedSubmission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failures' }})
    pending_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingCount' }})
    status: Optional[QueryBatchResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
