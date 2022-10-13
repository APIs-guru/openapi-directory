from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import meta22
from . import meta23
from . import meta25
from . import meta24


@dataclass_json
@dataclass
class DatasetRestAPIGet:
    cache_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cache_timeout' }})
    columns: meta22.Meta22 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    database: meta23.Meta23 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    datasource_type: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasource_type' }})
    default_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_endpoint' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    extra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extra' }})
    fetch_values_predicate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fetch_values_predicate' }})
    filter_select_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter_select_enabled' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_sqllab_view: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_sqllab_view' }})
    main_dttm_col: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'main_dttm_col' }})
    metrics: meta25.Meta25 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    owners: Optional[meta24.Meta24] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owners' }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sql' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table_name' }})
    template_params: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template_params' }})
    url: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
