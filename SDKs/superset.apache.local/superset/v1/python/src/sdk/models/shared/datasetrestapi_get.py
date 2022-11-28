from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatasetRestAPIGet:
    columns: Meta22 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    database: Meta23 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    metrics: Meta25 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('table_name') }})
    cache_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cache_timeout') }})
    datasource_type: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasource_type') }})
    default_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_endpoint') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    extra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extra') }})
    fetch_values_predicate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fetch_values_predicate') }})
    filter_select_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter_select_enabled') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_sqllab_view: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_sqllab_view') }})
    main_dttm_col: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('main_dttm_col') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    owners: Optional[Meta24] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owners') }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sql') }})
    template_params: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_params') }})
    url: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
