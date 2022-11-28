from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetAdminRecordingsStatus200ApplicationJSONStatusEnum(str, Enum):
    NEVER_STARTED = "NeverStarted"
    RECORDING = "Recording"
    STOPPED = "Stopped"


@dataclass_json
@dataclass
class GetAdminRecordingsStatus200ApplicationJSON:
    status: Optional[GetAdminRecordingsStatus200ApplicationJSONStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class GetAdminRecordingsStatusResponse:
    content_type: str = field()
    status_code: int = field()
    get_admin_recordings_status_200_application_json_object: Optional[GetAdminRecordingsStatus200ApplicationJSON] = field(default=None)
    
