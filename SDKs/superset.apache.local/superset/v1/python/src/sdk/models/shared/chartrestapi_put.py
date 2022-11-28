from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ChartRestAPIPutDatasourceTypeEnum(str, Enum):
    DRUID = "druid"
    TABLE = "table"
    VIEW = "view"


@dataclass_json
@dataclass
class ChartRestAPIPut:
    cache_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cache_timeout') }})
    dashboards: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboards') }})
    datasource_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasource_id') }})
    datasource_type: Optional[ChartRestAPIPutDatasourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasource_type') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    owners: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owners') }})
    params: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    query_context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query_context') }})
    slice_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slice_name') }})
    viz_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viz_type') }})
    
