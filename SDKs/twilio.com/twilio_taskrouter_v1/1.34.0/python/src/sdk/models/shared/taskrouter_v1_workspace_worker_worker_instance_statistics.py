from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    cumulative: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cumulative' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    worker_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'worker_sid' }})
    workspace_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspace_sid' }})
    
