from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SavedQueryRestAPIGetList:
    changed_on_delta_humanized: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_on_delta_humanized') }})
    created_by: Optional[Meta29] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    created_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_on'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    database: Optional[Meta30] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    db_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('db_id') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    extra: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extra') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    last_run_delta_humanized: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_run_delta_humanized') }})
    rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sql') }})
    sql_tables: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sql_tables') }})
    
