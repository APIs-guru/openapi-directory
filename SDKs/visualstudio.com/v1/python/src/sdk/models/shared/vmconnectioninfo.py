from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VMConnectionInfo:
    connection_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionType' }})
    live_share_workspace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liveShareWorkspaceId' }})
    
