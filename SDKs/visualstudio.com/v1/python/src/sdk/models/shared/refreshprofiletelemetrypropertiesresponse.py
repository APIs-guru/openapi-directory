from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import profilespecifier
from . import profilespecifier


@dataclass_json
@dataclass
class RefreshProfileTelemetryPropertiesResponse:
    failed: Optional[List[profilespecifier.ProfileSpecifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failed' }})
    succeeded: Optional[List[profilespecifier.ProfileSpecifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'succeeded' }})
    
