from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import metric


@dataclass_json
@dataclass
class Meta:
    metrics: Optional[List[metric.Metric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    puid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'puid' }})
    request_path: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestPath' }})
    routing: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routing' }})
    tags: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
