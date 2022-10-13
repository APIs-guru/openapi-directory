from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ReloadUserConf200ApplicationJSONActionEnum(str, Enum):
    RELOAD_USER_CONF = "reloadUserConf"


@dataclass_json
@dataclass
class ReloadUserConf200ApplicationJSONDataReload:
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class ReloadUserConf200ApplicationJSONData:
    reload: ReloadUserConf200ApplicationJSONDataReload = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reload' }})
    
class ReloadUserConf200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ReloadUserConf200ApplicationJSON:
    action: ReloadUserConf200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ReloadUserConf200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ReloadUserConf200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ReloadUserConfResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    reload_user_conf_200_application_json_object: Optional[ReloadUserConf200ApplicationJSON] = field(default=None)
    
