from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import reportrecipient
from . import validatorconfigjson

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
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    chart: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chart' }})
    context_markdown: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context_markdown' }})
    creation_method: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creation_method' }})
    crontab: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crontab' }})
    dashboard: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashboard' }})
    database: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    grace_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grace_period' }})
    log_retention: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'log_retention' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owners: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owners' }})
    recipients: Optional[List[reportrecipient.ReportRecipient]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipients' }})
    report_format: Optional[ReportScheduleRestAPIPostReportFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_format' }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sql' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    type: ReportScheduleRestAPIPostTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    validator_config_json: Optional[validatorconfigjson.ValidatorConfigJSON] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validator_config_json' }})
    validator_type: Optional[ReportScheduleRestAPIPostValidatorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validator_type' }})
    working_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'working_timeout' }})
    
