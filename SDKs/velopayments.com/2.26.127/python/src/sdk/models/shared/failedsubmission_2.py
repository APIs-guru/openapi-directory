from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import failedpayee_2


@dataclass_json
@dataclass
class FailedSubmission2:
    failed_submission: Optional[failedpayee_2.FailedPayee2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedSubmission' }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureMessage' }})
    
