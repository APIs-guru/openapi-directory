from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ReportScheduleRestAPIPostReportFormatEnum(str, Enum):
    PNG = "PNG"
    CSV = "CSV"
    TEXT = "TEXT"

class ReportScheduleRestAPIPostTypeEnum(str, Enum):
    ALERT = "Alert"
    REPORT = "Report"

class ReportScheduleRestAPIPostValidatorTypeEnum(str, Enum):
    NOT_NULL = "not null"
    OPERATOR = "operator"


@dataclass_json
@dataclass
class ReportScheduleRestAPIPost:
    crontab: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('crontab') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: ReportScheduleRestAPIPostTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    chart: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chart') }})
    context_markdown: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context_markdown') }})
    creation_method: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creation_method') }})
    dashboard: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboard') }})
    database: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    grace_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grace_period') }})
    log_retention: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('log_retention') }})
    owners: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owners') }})
    recipients: Optional[List[ReportRecipient]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipients') }})
    report_format: Optional[ReportScheduleRestAPIPostReportFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_format') }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sql') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    validator_config_json: Optional[ValidatorConfigJSON] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validator_config_json') }})
    validator_type: Optional[ReportScheduleRestAPIPostValidatorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validator_type') }})
    working_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('working_timeout') }})
    
