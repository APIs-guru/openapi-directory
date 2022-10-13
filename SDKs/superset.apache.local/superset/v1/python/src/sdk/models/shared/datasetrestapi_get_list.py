from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import meta19
from . import meta21
from . import meta20


@dataclass_json
@dataclass
class DatasetRestAPIGetList:
    changed_by: Optional[meta19.Meta19] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_by' }})
    changed_by_name: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_by_name' }})
    changed_by_url: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_by_url' }})
    changed_on_delta_humanized: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_on_delta_humanized' }})
    changed_on_utc: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_on_utc' }})
    database: meta21.Meta21 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    default_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_endpoint' }})
    explore_url: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explore_url' }})
    extra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extra' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    owners: Optional[meta20.Meta20] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owners' }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sql' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table_name' }})
    
