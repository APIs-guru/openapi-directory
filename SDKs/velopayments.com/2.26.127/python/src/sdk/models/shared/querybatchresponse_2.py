from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import failedsubmission_2

class QueryBatchResponse2StatusEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    ACCEPTED = "ACCEPTED"


@dataclass_json
@dataclass
class QueryBatchResponse2:
    failure_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCount' }})
    failures: Optional[List[failedsubmission_2.FailedSubmission2]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failures' }})
    pending_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingCount' }})
    status: Optional[QueryBatchResponse2StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
