from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ModifySettingPathParams:
    setting_id: str = field(metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ModifySettingRequestBody:
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class ModifySetting200ApplicationJSONActionEnum(str, Enum):
    MODIFY_SETTING = "modifySetting"


@dataclass_json
@dataclass
class ModifySetting200ApplicationJSONData:
    r"""ModifySetting200ApplicationJSONData
    Information about the setting
    """
    
    setting_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingId') }})
    
class ModifySetting200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ModifySetting200ApplicationJSON:
    action: ModifySetting200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ModifySetting200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: ModifySetting200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ModifySettingRequest:
    path_params: ModifySettingPathParams = field()
    request: ModifySettingRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ModifySettingResponse:
    content_type: str = field()
    status_code: int = field()
    modify_setting_200_application_json_object: Optional[ModifySetting200ApplicationJSON] = field(default=None)
    
