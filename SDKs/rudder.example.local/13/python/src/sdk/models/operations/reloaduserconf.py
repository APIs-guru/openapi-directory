from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReloadUserConf200ApplicationJSONActionEnum(str, Enum):
    RELOAD_USER_CONF = "reloadUserConf"


@dataclass_json
@dataclass
class ReloadUserConf200ApplicationJSONDataReload:
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class ReloadUserConf200ApplicationJSONData:
    reload: ReloadUserConf200ApplicationJSONDataReload = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reload') }})
    
class ReloadUserConf200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ReloadUserConf200ApplicationJSON:
    action: ReloadUserConf200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ReloadUserConf200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ReloadUserConf200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ReloadUserConfResponse:
    content_type: str = field()
    status_code: int = field()
    reload_user_conf_200_application_json_object: Optional[ReloadUserConf200ApplicationJSON] = field(default=None)
    
