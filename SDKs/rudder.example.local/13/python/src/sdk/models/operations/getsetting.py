from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetSettingPathParams:
    setting_id: str = field(default=None, metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSettingRequest:
    path_params: GetSettingPathParams = field(default=None)
    
class GetSetting200ApplicationJSONActionEnum(str, Enum):
    GET_SETTING = "getSetting"


@dataclass_json
@dataclass
class GetSetting200ApplicationJSONData:
    setting_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settingId' }})
    
class GetSetting200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetSetting200ApplicationJSON:
    action: GetSetting200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetSetting200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: GetSetting200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetSettingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_setting_200_application_json_object: Optional[GetSetting200ApplicationJSON] = field(default=None)
    
