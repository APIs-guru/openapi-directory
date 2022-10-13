from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class ChartDataResponseResultStatusEnum(str, Enum):
    STOPPED = "stopped"
    FAILED = "failed"
    PENDING = "pending"
    RUNNING = "running"
    SCHEDULED = "scheduled"
    SUCCESS = "success"
    TIMED_OUT = "timed_out"


@dataclass_json
@dataclass
class ChartDataResponseResult:
    annotation_data: Optional[List[dict[str, str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotation_data' }})
    applied_filters: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_filters' }})
    cache_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cache_key' }})
    cache_timeout: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cache_timeout' }})
    cached_dttm: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cached_dttm' }})
    data: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    is_cached: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_cached' }})
    query: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    rejected_filters: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejected_filters' }})
    rowcount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowcount' }})
    stacktrace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stacktrace' }})
    status: Optional[ChartDataResponseResultStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
