from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import meta40
from . import meta41
from . import meta37
from . import meta39
from . import meta38


@dataclass_json
@dataclass
class ReportScheduleRestAPIGet:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    chart: Optional[meta40.Meta40] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chart' }})
    context_markdown: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context_markdown' }})
    creation_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creation_method' }})
    crontab: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crontab' }})
    dashboard: Optional[meta41.Meta41] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashboard' }})
    database: Optional[meta37.Meta37] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    grace_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grace_period' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_eval_dttm: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_eval_dttm', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_state' }})
    last_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_value' }})
    last_value_row_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_value_row_json' }})
    log_retention: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'log_retention' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owners: Optional[meta39.Meta39] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owners' }})
    recipients: meta38.Meta38 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipients' }})
    report_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_format' }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sql' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    validator_config_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validator_config_json' }})
    validator_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validator_type' }})
    working_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'working_timeout' }})
    
