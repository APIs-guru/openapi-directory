from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasetcolumnsput
from . import datasetmetricsput


@dataclass_json
@dataclass
class DatasetRestAPIPut:
    cache_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cache_timeout' }})
    columns: Optional[List[datasetcolumnsput.DatasetColumnsPut]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    database_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database_id' }})
    default_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_endpoint' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    extra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extra' }})
    fetch_values_predicate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fetch_values_predicate' }})
    filter_select_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter_select_enabled' }})
    is_sqllab_view: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_sqllab_view' }})
    main_dttm_col: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'main_dttm_col' }})
    metrics: Optional[List[datasetmetricsput.DatasetMetricsPut]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    owners: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owners' }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sql' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table_name' }})
    template_params: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template_params' }})
    
