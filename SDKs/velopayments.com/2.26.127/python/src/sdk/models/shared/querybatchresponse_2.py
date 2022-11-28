from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class QueryBatchResponse2StatusEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    ACCEPTED = "ACCEPTED"


@dataclass_json
@dataclass
class QueryBatchResponse2:
    failure_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCount') }})
    failures: Optional[List[FailedSubmission2]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failures') }})
    pending_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingCount') }})
    status: Optional[QueryBatchResponse2StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
