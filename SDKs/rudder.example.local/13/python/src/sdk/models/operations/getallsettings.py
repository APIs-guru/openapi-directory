from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetAllSettings200ApplicationJSONActionEnum(str, Enum):
    GET_ALL_SETTINGS = "getAllSettings"


@dataclass_json
@dataclass
class GetAllSettings200ApplicationJSONData:
    r"""GetAllSettings200ApplicationJSONData
    Information about the setting
    """
    
    settings: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
class GetAllSettings200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetAllSettings200ApplicationJSON:
    action: GetAllSettings200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetAllSettings200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetAllSettings200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetAllSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    get_all_settings_200_application_json_object: Optional[GetAllSettings200ApplicationJSON] = field(default=None)
    
