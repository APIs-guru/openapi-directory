from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import meta8
from . import meta5
from . import meta7
from . import meta6


@dataclass_json
@dataclass
class ChartRestAPIGetList:
    cache_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cache_timeout' }})
    changed_by: Optional[meta8.Meta8] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_by' }})
    changed_by_name: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_by_name' }})
    changed_by_url: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_by_url' }})
    changed_on_delta_humanized: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_on_delta_humanized' }})
    changed_on_utc: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_on_utc' }})
    created_by: Optional[meta5.Meta5] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    datasource_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasource_id' }})
    datasource_name_text: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasource_name_text' }})
    datasource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasource_type' }})
    datasource_url: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasource_url' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    description_markeddown: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description_markeddown' }})
    edit_url: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'edit_url' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    owners: Optional[meta7.Meta7] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owners' }})
    params: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    slice_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slice_name' }})
    table: Optional[meta6.Meta6] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table' }})
    thumbnail_url: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnail_url' }})
    url: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    viz_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viz_type' }})
    
