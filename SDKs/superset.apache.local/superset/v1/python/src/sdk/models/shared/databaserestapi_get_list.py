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
class DatabaseRestAPIGetList:
    database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('database_name') }})
    allow_csv_upload: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_csv_upload') }})
    allow_ctas: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_ctas') }})
    allow_cvas: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_cvas') }})
    allow_dml: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_dml') }})
    allow_multi_schema_metadata_fetch: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_multi_schema_metadata_fetch') }})
    allow_run_async: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_run_async') }})
    allows_cost_estimate: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allows_cost_estimate') }})
    allows_subquery: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allows_subquery') }})
    allows_virtual_table_explore: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allows_virtual_table_explore') }})
    backend: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backend') }})
    changed_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_on'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    changed_on_delta_humanized: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_on_delta_humanized') }})
    created_by: Optional[Meta18] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    explore_database_id: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explore_database_id') }})
    expose_in_sqllab: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expose_in_sqllab') }})
    extra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extra') }})
    force_ctas_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force_ctas_schema') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
