from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    cache_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cache_key') }})
    cache_timeout: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cache_timeout') }})
    cached_dttm: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cached_dttm') }})
    is_cached: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_cached') }})
    query: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    annotation_data: Optional[List[dict[str, str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotation_data') }})
    applied_filters: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applied_filters') }})
    data: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    rejected_filters: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejected_filters') }})
    rowcount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowcount') }})
    stacktrace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stacktrace') }})
    status: Optional[ChartDataResponseResultStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
