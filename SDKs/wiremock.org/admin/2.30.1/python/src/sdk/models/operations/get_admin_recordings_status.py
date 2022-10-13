from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GetAdminRecordingsStatus200ApplicationJSONStatusEnum(str, Enum):
    NEVER_STARTED = "NeverStarted"
    RECORDING = "Recording"
    STOPPED = "Stopped"


@dataclass_json
@dataclass
class GetAdminRecordingsStatus200ApplicationJSON:
    status: Optional[GetAdminRecordingsStatus200ApplicationJSONStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetAdminRecordingsStatusResponse:
    content_type: str = field(default=None)
    get_admin_recordings_status_200_application_json_object: Optional[GetAdminRecordingsStatus200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
