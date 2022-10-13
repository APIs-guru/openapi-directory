from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ChartRestAPIPostDatasourceTypeEnum(str, Enum):
    DRUID = "druid"
    TABLE = "table"
    VIEW = "view"


@dataclass_json
@dataclass
class ChartRestAPIPost:
    cache_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cache_timeout' }})
    dashboards: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashboards' }})
    datasource_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasource_id' }})
    datasource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasource_name' }})
    datasource_type: ChartRestAPIPostDatasourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasource_type' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    owners: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owners' }})
    params: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    query_context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query_context' }})
    slice_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slice_name' }})
    viz_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viz_type' }})
    
