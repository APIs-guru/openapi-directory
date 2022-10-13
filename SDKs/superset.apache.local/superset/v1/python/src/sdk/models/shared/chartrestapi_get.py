from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import meta9
from . import meta10


@dataclass_json
@dataclass
class ChartRestAPIGet:
    cache_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cache_timeout' }})
    dashboards: Optional[meta9.Meta9] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashboards' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    owners: Optional[meta10.Meta10] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owners' }})
    params: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    query_context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query_context' }})
    slice_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slice_name' }})
    viz_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viz_type' }})
    
