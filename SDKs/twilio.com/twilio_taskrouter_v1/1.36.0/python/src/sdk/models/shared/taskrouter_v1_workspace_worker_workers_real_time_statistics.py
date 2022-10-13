from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    activity_statistics: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activity_statistics' }})
    total_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_workers' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    workspace_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspace_sid' }})
    
