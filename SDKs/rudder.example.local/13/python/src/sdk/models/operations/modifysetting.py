from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class ModifySettingPathParams:
    setting_id: str = field(default=None, metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ModifySettingRequestBody:
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass
class ModifySettingRequest:
    path_params: ModifySettingPathParams = field(default=None)
    request: ModifySettingRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class ModifySetting200ApplicationJSONActionEnum(str, Enum):
    MODIFY_SETTING = "modifySetting"


@dataclass_json
@dataclass
class ModifySetting200ApplicationJSONData:
    setting_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settingId' }})
    
class ModifySetting200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ModifySetting200ApplicationJSON:
    action: ModifySetting200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ModifySetting200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: ModifySetting200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ModifySettingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    modify_setting_200_application_json_object: Optional[ModifySetting200ApplicationJSON] = field(default=None)
    
