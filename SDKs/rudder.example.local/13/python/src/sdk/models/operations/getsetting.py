from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetSettingPathParams:
    setting_id: str = field(metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    
class GetSetting200ApplicationJSONActionEnum(str, Enum):
    GET_SETTING = "getSetting"


@dataclass_json
@dataclass
class GetSetting200ApplicationJSONData:
    r"""GetSetting200ApplicationJSONData
    Information about the setting
    """
    
    setting_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingId') }})
    
class GetSetting200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetSetting200ApplicationJSON:
    action: GetSetting200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetSetting200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: GetSetting200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetSettingRequest:
    path_params: GetSettingPathParams = field()
    

@dataclass
class GetSettingResponse:
    content_type: str = field()
    status_code: int = field()
    get_setting_200_application_json_object: Optional[GetSetting200ApplicationJSON] = field(default=None)
    
