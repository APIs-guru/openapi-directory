from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FailedSubmission:
    failed_submission: Optional[FailedPayee] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedSubmission') }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureMessage') }})
    
