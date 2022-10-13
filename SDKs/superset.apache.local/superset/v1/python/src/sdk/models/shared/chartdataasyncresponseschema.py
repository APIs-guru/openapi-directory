from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChartDataAsyncResponseSchema:
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel_id' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'job_id' }})
    result_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result_url' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    
