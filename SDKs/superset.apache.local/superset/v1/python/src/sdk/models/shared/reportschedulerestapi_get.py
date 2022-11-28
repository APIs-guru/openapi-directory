from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportScheduleRestAPIGet:
    crontab: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('crontab') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    recipients: Meta38 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipients') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    chart: Optional[Meta40] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chart') }})
    context_markdown: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context_markdown') }})
    creation_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creation_method') }})
    dashboard: Optional[Meta41] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboard') }})
    database: Optional[Meta37] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    grace_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grace_period') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_eval_dttm: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_eval_dttm'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_state') }})
    last_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_value') }})
    last_value_row_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_value_row_json') }})
    log_retention: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('log_retention') }})
    owners: Optional[Meta39] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owners') }})
    report_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_format') }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sql') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    validator_config_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validator_config_json') }})
    validator_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validator_type') }})
    working_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('working_timeout') }})
    
