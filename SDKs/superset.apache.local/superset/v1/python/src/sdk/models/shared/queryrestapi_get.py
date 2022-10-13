from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import meta28


@dataclass_json
@dataclass
class QueryRestAPIGet:
    changed_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    database: meta28.Meta28 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    end_result_backend_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_result_backend_time' }})
    end_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_time' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_message' }})
    executed_sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executed_sql' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    progress: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    results_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results_key' }})
    rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    select_as_cta: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select_as_cta' }})
    select_as_cta_used: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select_as_cta_used' }})
    select_sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select_sql' }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sql' }})
    sql_editor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sql_editor_id' }})
    start_running_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_running_time' }})
    start_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_time' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tab_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tab_name' }})
    tmp_schema_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tmp_schema_name' }})
    tmp_table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tmp_table_name' }})
    tracking_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracking_url' }})
    
