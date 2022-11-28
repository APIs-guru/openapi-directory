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
class QueryRestAPIGetList:
    database: Meta27 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    changed_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_on'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_time') }})
    executed_sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executed_sql') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sql') }})
    sql_tables: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sql_tables') }})
    start_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tab_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tab_name') }})
    tmp_table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tmp_table_name') }})
    tracking_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracking_url') }})
    user: Optional[Meta26] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
