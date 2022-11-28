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
class LogRestAPIGet:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    dashboard_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboard_id') }})
    dttm: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dttm'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duration_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration_ms') }})
    json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('json') }})
    referrer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referrer') }})
    slice_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slice_id') }})
    user: Optional[Meta43] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    
