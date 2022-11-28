from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    avg_task_acceptance_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg_task_acceptance_time') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reservations_accepted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservations_accepted') }})
    reservations_canceled: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservations_canceled') }})
    reservations_created: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservations_created') }})
    reservations_rejected: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservations_rejected') }})
    reservations_rescinded: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservations_rescinded') }})
    reservations_timed_out: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservations_timed_out') }})
    split_by_wait_time: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('split_by_wait_time') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tasks_canceled: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks_canceled') }})
    tasks_completed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks_completed') }})
    tasks_deleted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks_deleted') }})
    tasks_entered: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks_entered') }})
    tasks_moved: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks_moved') }})
    tasks_timed_out_in_workflow: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks_timed_out_in_workflow') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    wait_duration_until_accepted: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wait_duration_until_accepted') }})
    wait_duration_until_canceled: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wait_duration_until_canceled') }})
    workflow_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflow_sid') }})
    workspace_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace_sid') }})
    
