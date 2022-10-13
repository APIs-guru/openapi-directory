from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EnvironmentRegistrationCallbackPayloadBody:
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionId' }})
    session_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionPath' }})
    
