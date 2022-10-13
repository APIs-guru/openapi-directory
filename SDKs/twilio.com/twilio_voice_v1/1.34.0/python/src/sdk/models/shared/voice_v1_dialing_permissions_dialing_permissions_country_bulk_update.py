from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate:
    update_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_count' }})
    update_request: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_request' }})
    
