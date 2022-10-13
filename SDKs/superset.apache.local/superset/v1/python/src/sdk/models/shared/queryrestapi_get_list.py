from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import meta27
from . import meta26


@dataclass_json
@dataclass
class QueryRestAPIGetList:
    changed_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    database: meta27.Meta27 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    end_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_time' }})
    executed_sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executed_sql' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sql' }})
    sql_tables: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sql_tables' }})
    start_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_time' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tab_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tab_name' }})
    tmp_table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tmp_table_name' }})
    tracking_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracking_url' }})
    user: Optional[meta26.Meta26] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
