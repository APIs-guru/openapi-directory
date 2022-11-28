from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProvisioningStatusResult:
    completed_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completedSteps') }})
    current_step_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentStepDescription') }})
    is_ready: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isReady') }})
    operation_started_time_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationStartedTimeUtc') }})
    total_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSteps') }})
    
