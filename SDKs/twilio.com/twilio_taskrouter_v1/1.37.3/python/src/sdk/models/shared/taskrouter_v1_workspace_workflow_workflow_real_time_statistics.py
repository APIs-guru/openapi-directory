from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    longest_task_waiting_age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longest_task_waiting_age') }})
    longest_task_waiting_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longest_task_waiting_sid') }})
    tasks_by_priority: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks_by_priority') }})
    tasks_by_status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks_by_status') }})
    total_tasks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_tasks') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    workflow_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflow_sid') }})
    workspace_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace_sid') }})
    
