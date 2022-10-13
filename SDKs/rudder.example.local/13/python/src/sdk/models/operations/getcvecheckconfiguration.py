from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GetCveCheckConfiguration200ApplicationJSONActionEnum(str, Enum):
    GET_CVE_CHECK_CONFIGURATION = "getCVECheckConfiguration"


@dataclass_json
@dataclass
class GetCveCheckConfiguration200ApplicationJSONData:
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKey' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
class GetCveCheckConfiguration200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetCveCheckConfiguration200ApplicationJSON:
    action: GetCveCheckConfiguration200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetCveCheckConfiguration200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GetCveCheckConfiguration200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetCveCheckConfigurationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_cve_check_configuration_200_application_json_object: Optional[GetCveCheckConfiguration200ApplicationJSON] = field(default=None)
    
