from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DashboardDatasetSchema:
    cache_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cache_timeout') }})
    column_formats: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_formats') }})
    column_types: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_types') }})
    columns: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    database: Optional[Database] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    datasource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasource_name') }})
    default_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_endpoint') }})
    edit_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('edit_url') }})
    fetch_values_predicate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fetch_values_predicate') }})
    filter_select: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter_select') }})
    filter_select_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter_select_enabled') }})
    granularity_sqla: Optional[List[List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('granularity_sqla') }})
    health_check_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_check_message') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_sqllab_view: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_sqllab_view') }})
    main_dttm_col: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('main_dttm_col') }})
    metrics: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    order_by_choices: Optional[List[List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_by_choices') }})
    owners: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owners') }})
    params: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    perm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perm') }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    select_star: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('select_star') }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sql') }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table_name') }})
    template_params: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_params') }})
    time_grain_sqla: Optional[List[List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_grain_sqla') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    verbose_map: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verbose_map') }})
    
