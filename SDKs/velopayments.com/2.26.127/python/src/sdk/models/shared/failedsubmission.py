from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import failedpayee


@dataclass_json
@dataclass
class FailedSubmission:
    failed_submission: Optional[failedpayee.FailedPayee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedSubmission' }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureMessage' }})
    
