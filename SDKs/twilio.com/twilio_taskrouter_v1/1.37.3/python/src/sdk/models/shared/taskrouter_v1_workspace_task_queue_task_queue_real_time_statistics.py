from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    activity_statistics: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity_statistics') }})
    longest_relative_task_age_in_queue: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longest_relative_task_age_in_queue') }})
    longest_relative_task_sid_in_queue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longest_relative_task_sid_in_queue') }})
    longest_task_waiting_age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longest_task_waiting_age') }})
    longest_task_waiting_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longest_task_waiting_sid') }})
    task_queue_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('task_queue_sid') }})
    tasks_by_priority: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks_by_priority') }})
    tasks_by_status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks_by_status') }})
    total_available_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_available_workers') }})
    total_eligible_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_eligible_workers') }})
    total_tasks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_tasks') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    workspace_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace_sid') }})
    
