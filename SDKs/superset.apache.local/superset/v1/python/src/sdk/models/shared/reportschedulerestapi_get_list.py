from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import meta34
from . import meta33
from . import meta36
from . import meta35


@dataclass_json
@dataclass
class ReportScheduleRestAPIGetList:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    changed_by: Optional[meta34.Meta34] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_by' }})
    changed_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    changed_on_delta_humanized: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_on_delta_humanized' }})
    created_by: Optional[meta33.Meta33] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    created_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creation_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creation_method' }})
    crontab: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crontab' }})
    crontab_humanized: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crontab_humanized' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_eval_dttm: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_eval_dttm', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_state' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owners: Optional[meta36.Meta36] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owners' }})
    recipients: meta35.Meta35 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipients' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
